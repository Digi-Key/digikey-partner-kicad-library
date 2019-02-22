$(document).ready(function() {
    $('#listing_table').DataTable(
    {
        "order": [[6, 'asc']],
        "columnDefs": [{"targets": [0,1], "orderable": false}]
    });
});