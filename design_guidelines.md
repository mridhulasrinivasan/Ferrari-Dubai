# Ferrari Showroom Dubai - Design Guidelines

## Design Approach
**Reference-Based Luxury Automotive**: Drawing inspiration from high-end automotive (Porsche, Lamborghini configurators) and premium e-commerce (Rolex, Tesla). This design emphasizes cinematic presentation, sophisticated restraint, and premium materials aesthetic.

**Core Principle**: Every element conveys exclusivity and precision engineering. Less is more, but what's there must be exceptional.

## Typography System
- **Primary**: Montserrat (Google Fonts) - Clean, geometric, premium feel
  - Hero Headlines: 72px/bold (56px mobile)
  - Section Headers: 48px/semibold (36px mobile)
  - Model Names: 36px/semibold
  - Body Text: 18px/regular
- **Secondary**: Inter for specs and technical details (16px/medium)
- Letter-spacing: Slightly increased (0.02em) for luxury feel
- Line-height: Generous (1.6 for body, 1.2 for headlines)

## Layout System
**Spacing Units**: Tailwind 4, 6, 8, 12, 16, 24, 32 (consistent luxury spacing)
- Section padding: py-32 desktop, py-20 mobile
- Component gaps: 8-12 units
- Max container: max-w-7xl with px-6

## Page Structure

### 1. Hero Section (Full Viewport)
- Full-screen video background (looping showroom/driving footage)
- Centered content overlay with blurred-background buttons
- Minimal text: "Ferrari Dubai" + tagline + dual CTAs
- Subtle scroll indicator at bottom

### 2. Featured Models Grid (4-6 Models)
- 3-column desktop, 2-column tablet, 1-column mobile
- Each card: Large model image (16:9), model name, key specs (HP/0-60/Price), "Explore" CTA
- Hover: Subtle lift effect (no color changes)
- Cards with subtle borders, generous padding (p-8)

### 3. Virtual Tour CTA Section
- Full-width immersive layout with background image (showroom interior)
- Split design: Left 60% image, Right 40% content overlay
- Content: Bold headline, 3 bullet benefits, prominent CTA
- Blurred backdrop for text area

### 4. Heritage/Brand Story (Optional Enrichment)
- Single column, max-w-4xl centered
- Large typography with ample whitespace
- 2-3 prestige images in asymmetric layout

### 5. Contact Form Section
- 2-column layout: Left (form), Right (showroom info + map placeholder)
- Form fields: Name, Email, Phone, Model Interest (dropdown), Message
- Large, elegant inputs with borders
- Showroom details: Address, hours, phone with icons
- Form submit: Full-width premium button

### 6. Footer
- 3-column: About/Quick Links, Contact Info, Social Media
- Newsletter signup included
- Copyright and legal links

## Components Specifications

**Buttons**:
- Primary: Large (px-12 py-4), semibold text, sharp corners or minimal radius
- On images: Backdrop blur with semi-transparent background
- No hover color changes - use transform/shadow only

**Cards**:
- Subtle borders (1px), minimal shadow
- Generous internal padding (p-8 to p-12)
- Clean, angular aesthetic

**Forms**:
- Inputs: h-14, border, px-6, focus ring
- Labels: Above inputs, text-sm, semibold
- Consistent spacing (space-y-6)

## Images
**Hero**: Full-screen video (showroom tour or Ferrari driving footage)
**Featured Models**: High-quality product photos (6 different Ferrari models, side/three-quarter view, studio-lit)
**Virtual Tour**: Luxury showroom interior shot
**Heritage Section**: 2-3 historical/prestige Ferrari images
**Contact**: Map placeholder or showroom exterior

## Animation Strategy
- Minimal, refined animations only
- Hero: Subtle fade-in on load
- Scroll reveals: Gentle fade-up for sections
- Card hovers: Subtle lift (transform: translateY(-4px))
- NO carousel animations, NO excessive motion

## Key Design Principles
- **Precision**: Pixel-perfect alignment, consistent spacing
- **Sophistication**: Restrained elegance over flashy effects
- **Breathing Room**: Generous whitespace throughout
- **Premium Materials**: Clean edges, subtle shadows, quality imagery
- **Performance**: Fast, smooth, refined interactions