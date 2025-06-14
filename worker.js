export default {
  async fetch(request, env, ctx) {
    const url = new URL(request.url);
    let pathname = url.pathname;
    
    // Handle root path
    if (pathname === '/') {
      pathname = '/index.html';
    }
    
    // Handle trailing slashes for directories
    if (pathname.endsWith('/') && pathname !== '/') {
      pathname = pathname + 'index.html';
    }
    
    // Add .html extension if no extension is present
    if (!pathname.includes('.') && !pathname.endsWith('/')) {
      pathname = pathname + '.html';
    }
    
    try {
      // Try to get the asset from the ASSETS binding
      const asset = await env.ASSETS.fetch(new URL(pathname, request.url));
      
      if (asset.status === 404) {
        // If not found, try without .html extension
        const fallbackPath = pathname.replace('.html', '');
        const fallbackAsset = await env.ASSETS.fetch(new URL(fallbackPath, request.url));
        
        if (fallbackAsset.status === 404) {
          // Return 404 page or index.html for SPA routing
          return await env.ASSETS.fetch(new URL('/404.html', request.url));
        }
        
        return fallbackAsset;
      }
      
      return asset;
    } catch (error) {
      return new Response('Internal Server Error', { status: 500 });
    }
  },
}; 