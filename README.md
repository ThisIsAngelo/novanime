# NOVANIME

A website for anime fans. On Novanime, users can write reviews, give ratings, and easily discover new anime. The platform also helps users connect with others who share similar interests.

## Installation

```bash
npm install
```

## Set up environment variables

Create a `.env` file in the root of project and add the following:

```env
NEXT_PUBLIC_API_BASE_URL = https://api.jikan.moe/v4

GITHUB_CLIENT =
GITHUB_SECRET =

NEXTAUTH_SECRET =

DATABASE_URL=
```

### Make an OAuth Application on Github

1. Go to your profile and select "Settings".
2. Click the "Developer Setting" and click the "OAuth Apps" in the side bar.
3. Fill out the Application Details:
   - Application name: Enter a name for your application.
   - Homepage URL: Enter the URL of your application's homepage, e.g., http://localhost:3000
   - Application Description (Optional): Provide a brief description of your application.
   - Authorization callback URL: Enter the URL where users will be sent after authorization. This URL is used to redirect users back to your application. e.g., http://localhost:3000/api/auth/callback
4. Click the "Register application" button.
5. After registering, you will be taken to your application's page where you can find the Client ID and Client Secret. You will need to put these in your `.env` file: the Client ID as `GITHUB_CLIENT` and the Client Secret as `GITHUB_SECRET`.
6. You can create a new client secret by clicking the create new client secret button.
7. For the `NEXTAUTH_SECRET` you can fill it with any random values you choose.

### Make and migrate Database

1. Create Database on your MySQL: `CREATE DATABASE my_database`
2. Set the `DATABASE_URL` on your `.env`. e.g., "mysql://root:password@localhost:3306/my_database"
3. Ensure the database name in `DATABASE_URL` matches the database you created in step 1.
4. Migrate using this command: `npx prisma migrate dev`

## Run the code

```bash
npm run dev
```
