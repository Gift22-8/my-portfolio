/**
 * PORTFOLIO JAVASCRIPT - Sitota Yonas
 * Pure Vanilla JavaScript (No external libraries or dependencies)
 * Features:
 *  1. Dynamic copyright year
 *  2. Mobile navigation toggle & accessible controls
 *  3. Scroll-spy active navigation indicator
 *  4. Certificate lightbox/modal viewer
 *  5. Instant email copy-to-clipboard button
 */

document.addEventListener("DOMContentLoaded", () => {
  // --------------------------------------------------------------------------
  // 1. Dynamic Copyright Year
  // --------------------------------------------------------------------------
  const yearSpan = document.getElementById("current-year");
  if (yearSpan) {
    yearSpan.textContent = new Date().getFullYear();
  }

  // --------------------------------------------------------------------------
  // 2. Mobile Menu Toggle
  // --------------------------------------------------------------------------
  const menuToggle = document.getElementById("menu-toggle");
  const navLinks = document.getElementById("nav-links");

  if (menuToggle && navLinks) {
    menuToggle.addEventListener("click", () => {
      const isOpen = navLinks.classList.toggle("open");
      menuToggle.setAttribute("aria-expanded", isOpen ? "true" : "false");
    });

    // Close menu when clicking any nav link
    const links = navLinks.querySelectorAll(".nav-link");
    links.forEach((link) => {
      link.addEventListener("click", () => {
        if (navLinks.classList.contains("open")) {
          navLinks.classList.remove("open");
          menuToggle.setAttribute("aria-expanded", "false");
        }
      });
    });

    // Close menu when clicking outside of the navbar
    document.addEventListener("click", (e) => {
      if (
        navLinks.classList.contains("open") &&
        !navLinks.contains(e.target) &&
        !menuToggle.contains(e.target)
      ) {
        navLinks.classList.remove("open");
        menuToggle.setAttribute("aria-expanded", "false");
      }
    });
  }

  // --------------------------------------------------------------------------
  // 3. Highlight Active Navigation Link on Scroll
  // --------------------------------------------------------------------------
  const sections = document.querySelectorAll("section[id]");
  const navItems = document.querySelectorAll(".nav-link");

  function handleScrollSpy() {
    const scrollPosition = window.scrollY + 140;

    sections.forEach((section) => {
      const sectionTop = section.offsetTop;
      const sectionHeight = section.offsetHeight;
      const sectionId = section.getAttribute("id");

      if (scrollPosition >= sectionTop && scrollPosition < sectionTop + sectionHeight) {
        navItems.forEach((link) => {
          link.classList.remove("active");
          if (link.getAttribute("href") === `#${sectionId}`) {
            link.classList.add("active");
          }
        });
      }
    });
  }

  window.addEventListener("scroll", handleScrollSpy, { passive: true });

  // --------------------------------------------------------------------------
  // 4. Certificate Lightbox / Modal Viewer
  // --------------------------------------------------------------------------
  const certModal = document.getElementById("cert-modal");
  const modalBackdrop = document.getElementById("modal-backdrop");
  const modalCloseBtn = document.getElementById("modal-close-btn");
  const modalCertImg = document.getElementById("modal-cert-img");
  const modalCertTitle = document.getElementById("modal-cert-title");
  const modalCertDownload = document.getElementById("modal-cert-download");
  const modalCertVerify = document.getElementById("modal-cert-verify");

  let lastActiveElement = null;

  function openCertificateModal(src, title, verifyUrl, pdfUrl) {
    if (!certModal) return;

    lastActiveElement = document.activeElement;

    if (modalCertImg) {
      modalCertImg.src = src;
      modalCertImg.alt = title;
    }

    if (modalCertTitle) {
      modalCertTitle.textContent = title;
    }

    // Set download/view full file link (prefer original PDF if available, else PNG)
    if (modalCertDownload) {
      modalCertDownload.href = pdfUrl || src;
      modalCertDownload.setAttribute("download", (pdfUrl || src).split("/").pop());
      modalCertDownload.textContent = pdfUrl ? "Open PDF Document ↗" : "Open Full Image ↗";
    }

    if (modalCertVerify) {
      modalCertVerify.href = verifyUrl;
    }

    certModal.classList.add("open");
    certModal.setAttribute("aria-hidden", "false");
    document.body.style.overflow = "hidden"; // Prevent background scroll

    if (modalCloseBtn) {
      modalCloseBtn.focus();
    }
  }

  function closeCertificateModal() {
    if (!certModal) return;

    certModal.classList.remove("open");
    certModal.setAttribute("aria-hidden", "true");
    document.body.style.overflow = "";

    if (modalCertImg) {
      modalCertImg.src = "";
    }

    if (lastActiveElement) {
      lastActiveElement.focus();
    }
  }

  // Attach click listener to all "View Certificate" buttons
  const viewButtons = document.querySelectorAll(".btn-cert-view");
  viewButtons.forEach((btn) => {
    btn.addEventListener("click", () => {
      const src = btn.getAttribute("data-cert-src");
      const title = btn.getAttribute("data-cert-title") || "Certificate Preview";
      const verifyUrl = btn.getAttribute("data-cert-verify") || "#";
      const pdfUrl = btn.getAttribute("data-cert-pdf") || null;

      openCertificateModal(src, title, verifyUrl, pdfUrl);
    });
  });

  // Modal close handlers
  if (modalCloseBtn) {
    modalCloseBtn.addEventListener("click", closeCertificateModal);
  }

  if (modalBackdrop) {
    modalBackdrop.addEventListener("click", closeCertificateModal);
  }

  // Close on Escape key press
  document.addEventListener("keydown", (e) => {
    if (e.key === "Escape") {
      if (certModal && certModal.classList.contains("open")) {
        closeCertificateModal();
      }
      if (navLinks && navLinks.classList.contains("open")) {
        navLinks.classList.remove("open");
        if (menuToggle) menuToggle.setAttribute("aria-expanded", "false");
      }
    }
  });

  // --------------------------------------------------------------------------
  // 5. Copy Email to Clipboard Button
  // --------------------------------------------------------------------------
  const copyEmailBtn = document.getElementById("copy-email-btn");
  const emailAddress = "sitegifted@gmail.com";

  if (copyEmailBtn) {
    copyEmailBtn.addEventListener("click", async () => {
      try {
        if (navigator.clipboard && window.isSecureContext) {
          await navigator.clipboard.writeText(emailAddress);
        } else {
          // Fallback for non-https or older environments
          const textArea = document.createElement("textarea");
          textArea.value = emailAddress;
          textArea.style.position = "fixed";
          textArea.style.left = "-999999px";
          document.body.appendChild(textArea);
          textArea.focus();
          textArea.select();
          document.execCommand("copy");
          document.body.removeChild(textArea);
        }

        const originalText = copyEmailBtn.textContent;
        copyEmailBtn.textContent = "Copied! ✓";
        copyEmailBtn.classList.add("copied");

        setTimeout(() => {
          copyEmailBtn.textContent = originalText;
          copyEmailBtn.classList.remove("copied");
        }, 2500);
      } catch (err) {
        console.error("Failed to copy email:", err);
      }
    });
  }
});
