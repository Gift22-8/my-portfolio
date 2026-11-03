# 🌟 Sitota Yonas - Personal Portfolio Website

> *Personal portfolio website of Sitota Yonas, Software Engineering student.*

---

## 📌 Project Overview

This is a modern, responsive, and accessible personal portfolio website built using pure web standards (**HTML5**, **CSS3**, and **Vanilla JavaScript**). It showcases technical skills, hands-on software projects, academic background, verified credentials, and professional contact channels without any external frontend frameworks or heavy dependencies.

---

## 🛠️ Technology Stack

* **HTML5**: Semantic elements (`<header>`, `<nav>`, `<main>`, `<section>`, `<article>`, `<footer>`), ARIA accessibility roles and attributes (`aria-label`, `aria-expanded`, `aria-hidden`, `aria-modal`), and responsive `<meta name="viewport">` configuration.
* **CSS3**: CSS Custom Properties (`:root` design tokens), CSS Grid, Flexbox, responsive `@media` breakpoints, smooth scrolling, and subtle hardware-accelerated animations.
* **Vanilla JavaScript (ES6+)**: Clean, event-driven DOM manipulation, responsive mobile navigation toggle, dynamic copyright year updater, accessible certificate lightbox/modal viewer, and copy-to-clipboard functionality.

*Zero build tools, zero npm runtime dependencies, zero frameworks.*

---

## 📑 Main Sections

1. **Home / Hero**: Professional introduction, student status badge, title, and "Contact Me" call-to-action button.
2. **About Me**: A natural, concise summary of software engineering interests, focus areas, and hands-on learning.
3. **Technical Skills**: Structured into three distinct categories:
   * **Frontend Development**: HTML5, CSS3, JavaScript (ES6+)
   * **Programming & Systems**: Python, Java, Object-Oriented Programming (OOP)
   * **Tools & Database**: Git, GitHub, SQLite
4. **Featured Projects**: Attractive cards showcasing verified applications:
   * **Bloom**: Client-side personal productivity and task management app (HTML5, CSS3, JavaScript, localStorage).
   * **Student Management System**: Desktop GUI application engineered with Python, Tkinter, SQLite3, OOP, and unit tests.
   * **The Daily (Blog App)**: Full-stack web application with authentication, rich text editing, and live deployment.
5. **Certificates & Credentials**: Dedicated showcase for verified certifications with high-resolution previews, view/modal popups, and official verification links:
   * **Responsive Web Design** — *freeCodeCamp*
   * **JavaScript Algorithms & Data Structures** — *freeCodeCamp*
   * **Programming Fundamentals** — *Udacity & 5 Million Ethiopian Coders Initiative*
6. **Contact**: Direct communication channels including email with one-click copy, GitHub, and LinkedIn profile links.
7. **Footer**: Clean copyright attribution, automatically calculated copyright year, and a smooth scroll-to-top button.

---

## 📁 Folder Structure

```text
my-portfolio/
├── assets/
│   └── certificates/
│       ├── certificate-1.png   # freeCodeCamp Responsive Web Design
│       ├── certificate-2.png   # freeCodeCamp JavaScript Algorithms
│       ├── certificate-3.png   # Udacity Programming Fundamentals (image preview)
│       └── certificate-3.pdf   # Udacity Programming Fundamentals (original PDF document)
├── index.html                  # Main semantic HTML structure
├── style.css                   # Complete design tokens, layout, and responsive styles
├── script.js                   # Interactive navigation, modal lightbox, and utilities
└── README.md                   # Comprehensive documentation and maintenance guide
```

---

## 📜 How to Add New Certificate Files

The portfolio is designed to make adding future certificates straightforward.

### Step 1: Save the File
Place your certificate file into the `assets/certificates/` directory. Supported formats include:
* **PNG** (`.png`)
* **JPG / JPEG** (`.jpg`, `.jpeg`)
* **PDF** (`.pdf`)

*Naming tip: Name your file descriptively or sequentially, such as `certificate-4.png` or `certificate-4.pdf`.*

### Step 2: Add the Certificate Card in `index.html`
Inside `<div class="certificates-grid">`, duplicate and customize this template snippet:

```html
<!-- New Certificate Card -->
<article class="certificate-card">
  <div class="certificate-preview-container">
    <img
      src="assets/certificates/certificate-4.png"
      alt="Certificate Title preview"
      class="certificate-thumbnail"
      loading="lazy"
    />
    <span class="cert-format-badge">PNG</span>
  </div>
  <div class="certificate-content">
    <div class="cert-issuer-badge">Issuing Organization</div>
    <h3 class="certificate-title">Certificate Title</h3>
    <p class="certificate-description">
      Short summary of what the certificate validates and skills demonstrated.
    </p>
    <div class="certificate-meta">
      <span class="meta-item"><span class="meta-label">Issued:</span> Month Year</span>
      <span class="meta-item"><span class="meta-label">Status:</span> Verified Credential</span>
    </div>
    <div class="certificate-actions">
      <button
        type="button"
        class="btn btn-cert-view"
        data-cert-src="assets/certificates/certificate-4.png"
        data-cert-title="Certificate Title - Issuing Organization"
        data-cert-verify="https://verification-url.com"
      >
        View Certificate
      </button>
      <a
        href="https://verification-url.com"
        target="_blank"
        rel="noopener noreferrer"
        class="btn btn-cert-verify"
      >
        Verify ↗
      </a>
    </div>
  </div>
</article>
```

*Note: If the certificate is a PDF, also add the attribute `data-cert-pdf="assets/certificates/certificate-4.pdf"` to the button so the modal gives visitors a direct button to open the original PDF.*

---

## 🚀 How to Run the Portfolio Locally

Because the project uses standard web technologies, no installation or compilation is needed.

### Method 1: Direct File Launch (Quickest)
1. Navigate to `C:\Users\Hp\Desktop\GITHUB\my-portfolio`
2. Double-click `index.html` to open it in any web browser (Chrome, Edge, Firefox, Brave, Safari).

### Method 2: Local HTTP Server (Recommended)
Using Python (pre-installed on your system):
```powershell
cd "C:\Users\Hp\Desktop\GITHUB\my-portfolio"
python -m http.server 8000
```
Then visit `http://localhost:8000` in your web browser.

Using VS Code:
Right-click `index.html` in VS Code and click **"Open with Live Server"**.

---

## ♿ Accessibility & Standards

* Semantic heading hierarchy (`<h1>` through `<h3>`).
* Accessible button controls with clear `aria-label` tags for screen readers.
* Keyboard navigation support:
  * Full tab indexing across all interactive elements.
  * <kbd>Escape</kbd> key dismisses the certificate modal and mobile menu.
  * Click-outside detection to cleanly close menus and dialogs.
* Responsive contrast ratios adhering to WCAG AA recommendations.
* Responsive image sizing with descriptive alternative (`alt`) text.

---

## 👤 Author

* **Name**: Sitota Yonas
* **Role**: Software Engineering Student
* **GitHub**: [@Gift22-8](https://github.com/Gift22-8)
* **LinkedIn**: [Sitota Yonas](https://www.linkedin.com/in/sitota-yonas-18a371375)
* **Email**: [sitegifted@gmail.com](mailto:sitegifted@gmail.com)
