const ipoData = [
    {
      company: "Adani Power",
      priceBand: "₹329 - ₹136",
      open: "2023-06-03",
      close: "2024-06-05",
      issueSize: "45530.15 Cr.",
      issueType: "Book Built",
      listingDate: "2023-06-10",
      status: "Ongoing"
    },
    {
      company: "VBL LTD",
      priceBand: "₹229 - ₹136",
      open: "2024-06-03",
      close: "2024-06-05",
      issueSize: "1330.15 Cr.",
      issueType: "Book Built",
      listingDate: "2018-06-10",
      status: "Commimg"
    },
    {
      company: "Tata Motor",
      priceBand: "₹12549 - ₹136",
      open: "2024-06-03",
      close: "2024-06-05",
      issueSize: "1340.15 Cr.",
      issueType: "Book Built",
      listingDate: "2016-06-10",
      status: "New Listed"
    }
  ];
  
  const tableBody = document.getElementById("ipoTableBody");
  
  ipoData.forEach(ipo => {
    const badgeClass = `badge-${ipo.status.replace(" ", "")}`;
    const row = `
      <tr>
        <td>${ipo.company}</td>
        <td>${ipo.priceBand}</td>
        <td>${ipo.open}</td>
        <td>${ipo.close}</td>
        <td>${ipo.issueSize}</td>
        <td>${ipo.issueType}</td>
        <td>${ipo.listingDate}</td>
        <td><span class="badge badge-status ${badgeClass}">${ipo.status}</span></td>
        <td><button class="btn btn-primary btn-sm">Update</button></td>
        <td>
          <button class="btn btn-outline-danger btn-sm me-2">🗑️</button>
          <button class="btn btn-outline-dark btn-sm">👁️</button>
        </td>
      </tr>
    `;
    document.querySelectorAll('.nav-link[data-page]').forEach(link => {
      link.addEventListener('click', function (e) {
        e.preventDefault();
        const pageId = this.getAttribute('data-page');
    
        // Hide all content sections
        document.querySelectorAll('.page-section').forEach(section => {
          section.style.display = 'none';
        });
    
        // Show selected section
        document.getElementById(pageId).style.display = 'block';
    
        // Highlight active nav item
        document.querySelectorAll('.nav-link').forEach(nav => nav.classList.remove('active'));
        this.classList.add('active');
      });
    });
    
    tableBody.innerHTML += row;
  });
  
  
  
  