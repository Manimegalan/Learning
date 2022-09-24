/* =============================== Customized Sorting =============================== */

var items = ['asd', 'sdf', 'dsdf', '1sadf', '*sdf', '!sdf', '@asdf', '_asd', '.sadf', '(sadf', ')sadf', '#sadf', '^asdf', '&asdf', '%asdf', '-sadf', '=sadf', '+sadf', '-sdf', 'sef'];
function MySort(alphabet) {
    return function (a, b) {
        var index_a = alphabet.indexOf(a[0]),
            index_b = alphabet.indexOf(b[0]);
        if (index_a === index_b) {
            if (a < b) return -1;
            else if (a > b) return 1;
            return 0;
        } else {
            return index_a - index_b;
        }
    }
}
var sorter = MySort('*!@_.()#^&%-=+01234567989abcdefghijklmnopqrstuvwxyz');
console.log(items.sort(sorter));

