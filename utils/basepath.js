// Importing the 'dirname' function from the 'path' module, which is used to get the directory name of a path.
import { dirname } from 'path';

// Importing the 'fileURLToPath' function from the 'url' module, which is used to convert a file URL to a file system path.
import { fileURLToPath } from 'url';

// Using the 'fileURLToPath' function to convert the URL of the current module (import.meta.url) to a file system path.
const basePath = dirname(fileURLToPath(import.meta.url));

// Exporting the calculated base path, which represents the directory of the current module.
export default basePath;
