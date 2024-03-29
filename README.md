# Nkrumah's CV

Live on [cv.nkrumahsarpong.com](https://cv.nkrumahsarpong.com)

![cv](public/full_page_screenshot.png)

Simple web app that renders minimalist CV with print-friendly layout.

Built with Next.js and shadcn/ui, deployed on Vercel.

Forked from [here](https://github.com/BartoszJarocki/cv.git)

## Features

- Setup only takes a few minutes [single config file](./src/data/resume-data.tsx)
- Built using Next.js 14, React, Typescript, Shadcn/ui, TailwindCss
- Auto generated Layout
- Responsive for different devices
- Optimized for Next.js and Vercel

## Getting Started Locally

1. Clone this repository to your local machine:

   ```bash
   git clone https://github.com/nkrumahthis/cv.git
   ```

2. Move to the cloned directory

   ```bash
   cd cv
   ```

3. Install dependencies:

   ```bash
   yarn install
   ```

4. Start the local Server:

   ```bash
   yarn dev
   ```

5. Open the [Config file](./src/data/resume-data.tsx) and make changes

## Run with Docker

Build the containewr

```bash
docker compose build
```

Run the container

```bash
docker compose up -d
```

Stop the Container

```bash
docker compose down 
```

## License

[MIT](https://choosealicense.com/licenses/mit/)
