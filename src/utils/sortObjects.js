/**
 * Sort all objects by the start date parameter.
 * Need to do so by turning date strings in paremeters into Date() objs
 * @param {*} items
 */
export function sortObjects(items) {
  const sorted = items.sort(function compare(a, b) {
    var dateA = new Date(a.start);
    var dateB = new Date(b.start);
    return dateA - dateB;
  });
  return sorted;
}
