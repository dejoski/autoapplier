# Pending Feature Implementations

This file tracks all the features and functionalities in the portfolio website that are currently placeholders or require backend logic to be fully operational.

## Global
- [x] **CV Document**: Add a CV document (e.g., `public/Dejan_Stajic_Resume.pdf`) for the "Download CV" button. (Implemented: `public/Dejan_Stajic_Resume.pdf`)
- [ ] **Social Media Links**: Verify all social media URLs (GitHub, LinkedIn, Twitter/X, Mail) are correct in all sections (Hero, Contact, Footer).
- [ ] **Project Pages/Links**: The project links in the Header, Footer, and Projects section currently point to relative paths (e.g., `/debugdaily`). These pages need to be created, or the links should point to external URLs or be removed if not applicable.

## Header (`src/components/layout/header.tsx`)
- [ ] **Navigation Links**: Ensure all hash links (`#about`, `#projects`, etc.) correctly scroll to their respective sections on all pages.
- [ ] **Project Dropdown Links**:
    - [ ] `DebugDaily` link: Implement page or update URL.
    - [ ] `AI Tools` link: Implement page or update URL.
    - [ ] `Web Apps` link: Implement page or update URL.

## Footer (`src/components/layout/footer.tsx`)
- [ ] **Main Navigation Links**: Ensure all hash links correctly scroll.
- [ ] **Project Links**:
    - [ ] `DebugDaily` link: Implement page or update URL.
    - [ ] `AI Tools` link: Implement page or update URL.
    - [ ] `Web Apps` link: Implement page or update URL.
- [ ] **Social Links**: Verify `href` attributes for GitHub, LinkedIn, Twitter, Mail.

## Hero Section (`src/components/sections/hero-section.tsx`)
- [ ] **"Get In Touch" Button**: Implement action (e.g., scroll to Contact section or `mailto:` link).
- [ ] **"Download CV" Button**: Implement file download functionality once CV is available.
- [ ] **GitHub Social Button**: Add `href` to your GitHub profile.
- [ ] **LinkedIn Social Button**: Add `href` to your LinkedIn profile.
- [ ] **Mail Social Button**: Add `mailto:` link.

## Projects Section (`src/components/sections/projects-section.tsx`)
- For each project listed:
    - [ ] **"Live Demo" Button**: Ensure `liveUrl` points to a functional, deployed demo or update/remove.
    - [ ] **"GitHub" Button**: Ensure `githubUrl` points to the correct repository.

## Contact Section (`src/components/sections/contact-section.tsx`)
- [ ] **Form Submission (`handleSubmit` function)**: Implement actual form submission logic. This could involve:
    - Client-side email sending (e.g., EmailJS).
    - Serverless function (e.g., Vercel Functions, AWS Lambda) to process and send email.
    - Integration with a form backend service (e.g., Formspree, Getform).
- [ ] **Social Links**: Verify `href` attributes for GitHub, LinkedIn, Twitter.

## Experience Section (`src/components/sections/experience-section.tsx`)
- [ ] **Review Links**: Double-check if any text in descriptions or achievements is meant to be a hyperlink and implement if necessary. (Currently seems okay, but good to review). 