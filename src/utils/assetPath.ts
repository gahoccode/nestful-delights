/**
 * Helper function to get the correct path for assets when deployed to GitHub Pages
 * @param path The path to the asset, starting with a slash
 * @returns The correct path with the base URL prepended if needed
 */
export function getAssetPath(path: string): string {
  // Use the BASE_URL from Vite's environment variables
  const baseUrl = import.meta.env.BASE_URL || '/';
  
  // Remove any leading slash from the path to avoid double slashes
  const cleanPath = path.startsWith('/') ? path.slice(1) : path;
  
  // Combine the base URL with the clean path
  return `${baseUrl}${cleanPath}`;
}
