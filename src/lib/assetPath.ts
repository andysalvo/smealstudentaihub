/**
 * Helper function to construct asset paths that work with GitHub Pages basePath.
 *
 * When deployed to GitHub Pages at andysalvo.github.io/smealstudentaihub/,
 * all assets need to be prefixed with the repository name.
 *
 * @param path - The asset path starting with /
 * @returns The full asset path including basePath if configured
 */
export function assetPath(path: string): string {
  const basePath = process.env.NEXT_PUBLIC_BASE_PATH || ''
  return `${basePath}${path}`
}
