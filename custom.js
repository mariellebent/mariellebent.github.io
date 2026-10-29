(function () {
  if (document.body.classList.contains("home-page")) {

      const menuButton = document.querySelector(".menu-button");
      const menuPanel = document.querySelector(".menu-panel");
      const siteHeader = document.querySelector(".site-header");

      const motionPreference = window.matchMedia("(prefers-reduced-motion: reduce)");
      const revealItems = document.querySelectorAll(".book-feature, .world-section > *, .author-card, .newsletter > *");

      if ("IntersectionObserver" in window && !motionPreference.matches) {
        revealItems.forEach((item) => item.classList.add("reveal"));
        const revealObserver = new IntersectionObserver((entries, observer) => {
          entries.forEach((entry) => {
            if (entry.isIntersecting) {
              entry.target.classList.add("is-visible");
              observer.unobserve(entry.target);
            }
          });
        }, { threshold: 0.12 });
        revealItems.forEach((item) => revealObserver.observe(item));
      }

      const updateHeader = () => {
        siteHeader.classList.toggle("scrolled", window.scrollY > 12);
      };

      window.addEventListener("scroll", updateHeader, { passive: true });
      updateHeader();

      const setMenuOpen = (isOpen) => {
        menuButton.setAttribute("aria-expanded", String(isOpen));
        menuPanel.setAttribute("aria-hidden", String(!isOpen));
        menuPanel.classList.toggle("open", isOpen);
        document.body.classList.toggle("menu-open", isOpen);
        if (isOpen) menuPanel.querySelector("a").focus();
      };

      menuButton.addEventListener("click", () => {
        setMenuOpen(menuButton.getAttribute("aria-expanded") !== "true");
      });

      menuPanel.addEventListener("click", (event) => {
        if (event.target instanceof HTMLAnchorElement) {
          setMenuOpen(false);
        }
      });
      document.addEventListener("keydown", (event) => {
        if (event.key === "Escape" && menuButton.getAttribute("aria-expanded") === "true") {
          setMenuOpen(false);
          menuButton.focus();
        }
      });
    
  }

  if (document.body.classList.contains("book-page")) {

      const menuButton = document.querySelector(".menu-button");
      const menuPanel = document.querySelector(".menu-panel");
      const setMenuOpen = (isOpen) => {
        menuButton.setAttribute("aria-expanded", String(isOpen));
        menuPanel.setAttribute("aria-hidden", String(!isOpen));
        menuPanel.classList.toggle("open", isOpen);
        document.body.classList.toggle("menu-open", isOpen);
        if (isOpen) menuPanel.querySelector("a").focus();
      };

      menuButton.addEventListener("click", () => {
        setMenuOpen(menuButton.getAttribute("aria-expanded") !== "true");
      });

      menuPanel.addEventListener("click", (event) => {
        if (event.target instanceof HTMLAnchorElement) {
          setMenuOpen(false);
        }
      });
      document.addEventListener("keydown", (event) => {
        if (event.key === "Escape" && menuButton.getAttribute("aria-expanded") === "true") {
          setMenuOpen(false);
          menuButton.focus();
        }
      });

      const motionPreference = window.matchMedia("(prefers-reduced-motion: reduce)");
      const revealItems = document.querySelectorAll(".book-detail, .coming-book, .world-section > *, .character-section, .character-card");

      if ("IntersectionObserver" in window && !motionPreference.matches) {
        revealItems.forEach((item) => item.classList.add("reveal"));
        const revealObserver = new IntersectionObserver((entries, observer) => {
          entries.forEach((entry) => {
            if (entry.isIntersecting) {
              entry.target.classList.add("is-visible");
              observer.unobserve(entry.target);
            }
          });
        }, { threshold: 0.12 });
        revealItems.forEach((item) => revealObserver.observe(item));
      }
    
  }

  if (document.body.classList.contains("contact-page")) {

      const menuButton = document.querySelector(".menu-button");
      const menuPanel = document.querySelector(".menu-panel");
      const siteHeader = document.querySelector(".site-header");

      const updateHeader = () => {
        siteHeader.classList.toggle("scrolled", window.scrollY > 12);
      };
      window.addEventListener("scroll", updateHeader, { passive: true });
      updateHeader();

      const setMenuOpen = (isOpen) => {
        menuButton.setAttribute("aria-expanded", String(isOpen));
        menuPanel.setAttribute("aria-hidden", String(!isOpen));
        menuPanel.classList.toggle("open", isOpen);
        document.body.classList.toggle("menu-open", isOpen);
        if (isOpen) menuPanel.querySelector("a").focus();
      };

      menuButton.addEventListener("click", () => {
        setMenuOpen(menuButton.getAttribute("aria-expanded") !== "true");
      });

      menuPanel.addEventListener("click", (event) => {
        if (event.target instanceof HTMLAnchorElement) {
          setMenuOpen(false);
        }
      });
      document.addEventListener("keydown", (event) => {
        if (event.key === "Escape" && menuButton.getAttribute("aria-expanded") === "true") {
          setMenuOpen(false);
          menuButton.focus();
        }
      });
    
  }

  if (document.body.classList.contains("realm-page")) {

      const markers = document.querySelectorAll(".map-marker");
      const locationNote = document.querySelector(".location-note");

      markers.forEach((marker) => {
        marker.addEventListener("click", () => {
          const wasExpanded = marker.getAttribute("aria-expanded") === "true";
          markers.forEach((item) => item.setAttribute("aria-expanded", "false"));
          marker.setAttribute("aria-expanded", String(!wasExpanded));
          locationNote.textContent = wasExpanded ? "" : "More about this location coming soon.";
          locationNote.classList.toggle("visible", !wasExpanded);
        });
      });

      const godFilters = document.querySelectorAll(".god-filter");
      const godCards = document.querySelectorAll(".god-card");
      const godDirectoryCards = document.querySelectorAll("#god-directory .god-card");
      const godFilterStatus = document.querySelector(".god-filter-status");
      const motionPreference = window.matchMedia("(prefers-reduced-motion: reduce)");

      if ("IntersectionObserver" in window && !motionPreference.matches) {
        const revealItems = document.querySelectorAll(".map-frame, .gods-intro, .god-filters, #god-directory .god-card");
        revealItems.forEach((item) => item.classList.add("reveal"));
        const revealObserver = new IntersectionObserver((entries, observer) => {
          entries.forEach((entry) => {
            if (entry.isIntersecting) {
              entry.target.classList.add("is-visible");
              observer.unobserve(entry.target);
            }
          });
        }, { threshold: 0.12 });
        revealItems.forEach((item) => revealObserver.observe(item));
        const revealPassedItems = () => {
          revealItems.forEach((item) => {
            if (item.getBoundingClientRect().bottom < 0) {
              item.classList.add("is-visible");
              revealObserver.unobserve(item);
            }
          });
        };
        window.addEventListener("scroll", revealPassedItems, { passive: true });
        revealPassedItems();
      }

      godFilters.forEach((filter) => {
        filter.addEventListener("click", () => {
          const domain = filter.dataset.filter;
          let visibleCount = 0;

          godFilters.forEach((button) => {
            button.setAttribute("aria-pressed", String(button === filter));
          });
          godCards.forEach((card) => {
            const isVisible = domain === "all" || card.dataset.domain === domain;
            card.hidden = !isVisible;
          });
          godDirectoryCards.forEach((card) => {
            if (!card.hidden) visibleCount += 1;
          });

          const category = domain === "all" ? "all" : filter.textContent.trim();
          godFilterStatus.textContent = `Showing ${visibleCount} god${visibleCount === 1 ? "" : "s"}${domain === "all" ? "" : ` in ${category}`}.`;
        });
      });
    
  }
})();
