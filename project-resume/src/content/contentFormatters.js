/**
 * @summary formats the URL pathname into a header
 */
export function formatHeaderText(pathName) {
    var formattedName = pathName.replace('/', '');
    formattedName = formattedName.charAt(0).toUpperCase() + formattedName.slice(1) || '';
    return formattedName;
  }