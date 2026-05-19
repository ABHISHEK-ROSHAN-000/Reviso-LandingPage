const http = require('http');
const https = require('https');
const { performance } = require('perf_hooks');

class PerformanceTester {
  constructor(baseUrl = 'http://localhost:3000') {
    this.baseUrl = baseUrl;
    this.results = [];
  }

  measureLoadTime(url) {
    return new Promise((resolve, reject) => {
      const startTime = performance.now();
      const isHttps = url.startsWith('https://');
      const client = isHttps ? https : http;

      const req = client.get(url, (res) => {
        const chunks = [];
        res.on('data', (chunk) => chunks.push(chunk));
        res.on('end', () => {
          const endTime = performance.now();
          const loadTime = endTime - startTime;
          const contentLength = chunks.reduce((acc, chunk) => acc + chunk.length, 0);
          resolve({
            url,
            status: res.statusCode,
            loadTime,
            contentLength,
            headers: res.headers
          });
        });
      });

      req.on('error', reject);
      req.setTimeout(10000, () => {
        req.destroy();
        reject(new Error(`Request timeout for ${url}`));
      });
    });
  }

  async extractImageUrls(html) {
    const imgRegex = /<img[^>]+src="([^">]+)"/g;
    const urls = [];
    let match;
    while ((match = imgRegex.exec(html)) !== null) {
      urls.push(match[1]);
    }
    return [...new Set(urls)]; // Remove duplicates
  }

  async getPageHTML(url) {
    const isHttps = url.startsWith('https://');
    const client = isHttps ? https : http;

    return new Promise((resolve, reject) => {
      const req = client.get(url, (res) => {
        let data = '';
        res.on('data', (chunk) => data += chunk);
        res.on('end', () => resolve(data));
      });
      req.on('error', reject);
      req.setTimeout(10000, () => {
        req.destroy();
        reject(new Error(`Request timeout for ${url}`));
      });
    });
  }

  async runBaselineTest() {
    console.log('\n=== Starting Baseline Performance Test ===\n');
    
    // Test main page
    console.log('1. Testing main page load...');
    const pageResult = await this.measureLoadTime(this.baseUrl);
    console.log(`   Status: ${pageResult.status}`);
    console.log(`   Load Time: ${pageResult.loadTime.toFixed(2)}ms`);
    console.log(`   Content Length: ${(pageResult.contentLength / 1024).toFixed(2)} KB`);

    // Extract image URLs from HTML
    console.log('\n2. Extracting image URLs from HTML...');
    const html = await this.getPageHTML(this.baseUrl);
    const imageUrls = await this.extractImageUrls(html);
    console.log(`   Found ${imageUrls.length} unique images`);
    
    // Test each image individually
    console.log('\n3. Testing individual image load times...');
    const imageResults = [];
    
    for (const imgUrl of imageUrls) {
      try {
        const fullUrl = imgUrl.startsWith('http') ? imgUrl : `${this.baseUrl}${imgUrl.startsWith('/') ? '' : '/'}${imgUrl}`;
        const result = await this.measureLoadTime(fullUrl);
        imageResults.push(result);
        console.log(`   ✓ ${imgUrl}: ${result.loadTime.toFixed(2)}ms (${(result.contentLength / 1024).toFixed(2)} KB)`);
      } catch (error) {
        console.log(`   ✗ ${imgUrl}: FAILED - ${error.message}`);
      }
    }

    // Summary
    console.log('\n=== Performance Summary ===');
    console.log(`Main page load: ${pageResult.loadTime.toFixed(2)}ms`);
    console.log(`Total images: ${imageResults.length}`);
    
    if (imageResults.length > 0) {
      const avgImageLoadTime = imageResults.reduce((sum, r) => sum + r.loadTime, 0) / imageResults.length;
      const totalImageSize = imageResults.reduce((sum, r) => sum + r.contentLength, 0);
      const slowestImage = imageResults.reduce((max, r) => r.loadTime > max.loadTime ? r : max);
      
      console.log(`Average image load time: ${avgImageLoadTime.toFixed(2)}ms`);
      console.log(`Total image size: ${(totalImageSize / 1024).toFixed(2)} KB`);
      console.log(`Slowest image: ${slowestImage.url} (${slowestImage.loadTime.toFixed(2)}ms, ${(slowestImage.contentLength / 1024).toFixed(2)} KB)`);
    }

    return {
      page: pageResult,
      images: imageResults
    };
  }
}

// Run the test
const tester = new PerformanceTester('http://localhost:3000');
tester.runBaselineTest()
  .then(() => {
    console.log('\n✓ Baseline test completed');
    process.exit(0);
  })
  .catch((error) => {
    console.error('✗ Test failed:', error);
    process.exit(1);
  });