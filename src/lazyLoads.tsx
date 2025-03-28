class LazyLoad {
    private images: NodeListOf<HTMLImageElement>;
  
    constructor(selector: string) {
      // Get all images by the selector
      this.images = document.querySelectorAll(selector) as NodeListOf<HTMLImageElement>;
      this.init();
    }
  
    private init(): void {
      // Check for IntersectionObserver support
      if ('IntersectionObserver' in window) {
        this.observeImages();
      } else {
        this.fallback();
      }
    }
  
    private observeImages(): void {
      // Create the IntersectionObserver
      const observer = new IntersectionObserver((entries, observer) => {
        entries.forEach(entry => {
          if (entry.isIntersecting) {
            this.loadImage(entry.target as HTMLImageElement);
            observer.unobserve(entry.target);
          }
        });
      });
  
      // Observe each image
      this.images.forEach(image => {
        observer.observe(image);
      });
    }
  
    private loadImage(image: HTMLImageElement): void {
      const src = image.getAttribute('data-src');
      if (src) {
        image.src = src;
      }
    }
  
    private fallback(): void {
      // If IntersectionObserver is not supported, load all images
      this.images.forEach(image => {
        image.src = image.getAttribute('data-src') || '';
      });
    }
  }
  
  export default LazyLoad;
  