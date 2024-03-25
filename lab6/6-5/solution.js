function solve() {
   document.querySelector('#searchBtn').addEventListener('click', onClick);

   function onClick() {
      const searchBtn = document.getElementById('searchBtn');
      const searchField = document.getElementById('searchField');
      const tableRows = document.querySelectorAll('tbody tr');

      searchBtn.addEventListener('click', function() {
         const searchTerm = searchField.value.trim().toLowerCase();

         tableRows.forEach(row => {
            let matchFound = false;
            row.classList.remove('select');

            row.querySelectorAll('td').forEach(cell => {
               const cellText = cell.textContent.trim().toLowerCase();

               // check for FULL EQUALITY
               if (cellText === searchTerm) {
                  matchFound = true;
               }

               // check for PARTIAL EQUALITY
               if (cellText.includes(searchTerm)) {
                  matchFound = true;
               }
            });

            if (matchFound) {
               row.classList.add('select');
            }
         });
      });

   }
}