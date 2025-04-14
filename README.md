# Front-Serresfilm

Frontend application for **Serresfilm**, built using Next.js 15 and TypeScript. Designed for high performance and a modern UI, this project focuses on presenting greenhouse information and benefits in an intuitive and responsive way.

## 🌐 Live Demo

Check out the live deployment:
https://front-serresfilm.vercel.app/

## 📸 Preview Screenshot _(Optional)_

![Screenshot](./public/preview.png)

## ⚙️ Technologies Used

- [Next.js 15](https://nextjs.org/)
- [TypeScript](https://www.typescriptlang.org/)
- [Material UI](https://mui.com/)
- [Vercel](https://vercel.com/) for deployment

## 🚀 Features

- Informative pages about greenhouses
- Reusable, modular components
- Fully responsive design
- SEO-optimized structure
- Production-ready configuration

## 📁 Project Structure

```
src/
├── app/
│   └── greenHouse/
│       └── page.tsx
├── components/
│   └── GreenHouse/
│       ├── BenefitsGreenhouse.tsx
│       ├── GetGreenhouse.tsx
│       ├── GreenHouseHeader.tsx
│       ├── InformationGreenHouse.tsx
│       └── ServicesGreenhouse.tsx
```

## ⚡ Local Development

To run the project locally:

```bash
git clone https://github.com/Javiermartin12/Front-Serresfilm.git
cd Front-Serresfilm
npm install
npm run dev
```

## 🛠️ Available Scripts

- `npm run dev` — Start the local dev server
- `npm run build` — Build the app for production
- `npm run lint` — Run ESLint to check for code issues

## 🚢 Deployment

This project is deployed via **Vercel**. To build for production:

```bash
npm run build
```

**Note:**

- File names are **case-sensitive** in production (Linux) environments. For example, `GreenHouseHeader.tsx` ≠ `greenhouseHeader.tsx`

## 🤝 Contributing

Contributions are welcome! Follow these steps:

1. Fork the repository
2. Create a new branch: `git checkout -b feature/your-feature-name`
3. Commit your changes: `git commit -m "Add new feature"`
4. Push to your fork: `git push origin feature/your-feature-name`
5. Create a Pull Request

## 📄 License

Distributed under the [MIT License](LICENSE).
