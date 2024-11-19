# From Schema to Server: Building a Production-Ready Backend with database.build and Daytona

Designing a database can feel like a never-ending maze. You spend hours mapping out tables, defining relationships, and making sure nothing breaks—all while knowing a single oversight can throw your whole project off track.

What if there was an easier way? That’s where [database.build](https://database.build/) steps in. This AI tool simplifies database design, turning what used to take hours into something you can finish in minutes, without second-guessing every detail.

In this guide, we’ll walk you through building the backend for a blog application. You’ll see how to use **database.build** to design your database, set up **Supabase** for your project, and create **Next.js** API endpoints to manage your data. To make it even easier, we’ll provide a pre-built app with a ready-to-go dev environment you can run with **Daytona**. By the end, you’ll know exactly how to create a functional backend without all the usual headaches.

## Database.build: Your Shortcut to Effortless Database Design

If you’ve ever spent hours sketching out database schemas or tweaking relationships between tables, you know how tedious and error-prone the process can be. **Database.build** changes the game by making this process faster, simpler, and dare we say, enjoyable.

![datbase.build image](/docs/assets/datbase-build-app-image-1.png)

With its AI-powered schema generator, you can turn a simple prompt into a complete database design in seconds. Need tables for Users, Blog Posts, and Comments? Just ask, and it delivers complete with relationships mapped out and SQL commands ready to copy-paste into your database.

Some of its features include:

- **Smart AI prompts:** Describe your database needs in plain English, and it generates a well-structured schema for you.
- **Visual clarity:** See how your tables connect at a glance with its clean and interactive interface.
- **Developer-ready SQL:** Instantly get SQL commands compatible with PostgreSQL, saving you the hassle of writing them from scratch.

## Tools Powering the Blog Application Backend

Building this backend application was made easier with a set of powerful tools, each playing a unique role in simplifying development. Here's what we used:

- [Database.build](https://database.build/) - An AI-powered tool that takes the headache out of designing database schemas. Just describe your app, and it handles the rest.

- [Supabase](https://supabase.com/) - A PostgreSQL-based backend-as-a-service that handles database management and hosting effortlessly.

- [Next.js](https://nextjs.org/) - A developer-friendly framework for creating robust API endpoints and handling server-side functionality.

- [Dev Container](https://containers.dev/) and  [Daytona](https://www.daytona.io/) -  A pre-configured development environment that works with Daytona to set up and run the app effortlessly in just a couple of commands.

## From Plan to Production-Ready Backend

Building the backend for a blog application might sound daunting, but with the right tools, it’s much simpler than you think. Let’s start with the foundation: the database.

Let’s start at the foundation of any backend application - the database. Designing a well-structured database can be a headache, but it doesn’t have to be.


### Step 1: Design a Blog Application Database

Let's use database.build to design the schema for our blog application. All it took was a simple prompt, for example:

***Design a database for a blog application with tables for Users, Blog Posts, and Comments. Include relationships for efficient data management.***

The result? A clean and organized schema with `Users`, `Blog Posts`, and `Comments` tables, all connected to make data management efficient. Here's a quick glimpse of the SQL commands that were generated:

```sql
create table users (
  id bigint primary key generated always as identity,
  username text not null unique,
  email text not null unique,
  password text not null,
  created_at timestamptz default now()
);

create table blog_posts (
  id bigint primary key generated always as identity,
  user_id bigint not null,
  title text not null,
  content text not null,
  created_at timestamptz default now(),
  foreign key (user_id) references users (id) on delete cascade
);

create table comments (
  id bigint primary key generated always as identity,
  blog_post_id bigint not null,
  user_id bigint not null,
  content text not null,
  created_at timestamptz default now(),
  foreign key (blog_post_id) references blog_posts (id) on delete cascade,
  foreign key (user_id) references users (id) on delete cascade
);
```

Here’s the visual schema from database.build, showing clear relationships between tables. It’s a simple way to ensure your database is well-structured.

![datbase.build image](/docs/assets/datbase-build-app-image-2.png)

This step lays the groundwork for the backend, saving hours of manual effort and ensuring a solid design right from the start.

### Step 2: Setting Up Your Supabase Project

Once your database design is ready, it’s time to bring it to life in Supabase. Follow these simple steps:

**1. Create a Supabase Project**

Head over to the [Supabase Documentation](https://supabase.com/docs/guides/database/overview) and set up your project. This will serve as the backend for your blog application.

**2. Create the Tables**

In the Supabase dashboard, go to the **SQL Editor** and paste the SQL commands generated by **database.build**. These commands will create the tables and establish relationships for `Users`, `Blog Posts`, and `Comments`.

**3. Verify the Tables**

After running the SQL, check the **Table Editor** in the dashboard to confirm that all tables and their relationships are created correctly. This step ensures your schema aligns with the original design.

![datbase.build schema design](/docs/assets/datbase-build-app-design.png)

**4. Get Your Supabase Credentials**

Navigate to **Project Settings > API** in the Supabase dashboard. Here, you’ll find the `Project URL` and `API Key` you’ll need these to connect your Next.js application to the database.

For more details, check out this Supabase with Next.js [Quickstart Guide](https://supabase.com/docs/guides/getting-started/quickstarts/nextjs). It’s a handy resource to get you up and running quickly.

### Step 3: Set Up Supabase in Your Next.js App

Now that your database is ready, it's time to connect your Next.js application to Supabase. This is where things start coming together, enabling you to interact with the database directly from your app.

```npm
npm install @supabase/supabase-js
```

With the library in place, create a `supabaseClient.ts` file in your project to initialize the Supabase client. Here's an example you can follow:

```ts
// src/utils/supabaseClient.ts
import { createClient } from '@supabase/supabase-js';

const supabaseUrl = process.env.SUPABASE_URL!;
const supabaseKey = process.env.SUPABASE_API_KEY!;

export const supabase = createClient(supabaseUrl, supabaseKey);
```

Next, you’ll need to set your Supabase credentials. In the root of your Next.js project, create a `.env` file and add:

```bash
SUPABASE_URL="SUPABASE_PROJECT_URL"
SUPABASE_API_KEY="SUPABASE_API_KEY"
```

Once this setup is complete, your Next.js app will be ready to communicate with the Supabase backend. This integration lets you start building functionality like creating, updating, and retrieving data effortlessly. You’re now one step closer to a fully functioning backend!

### Step 4: Building API Endpoints in Next.js

With Supabase connected, the next step is writing API endpoints to interact with your database. These endpoints serve as the bridge between your frontend and the database, making it easy to perform operations like creating users, adding blogs, and managing comments.

For detailed guidance on using Supabase with Next.js, check out this [Supabase API reference](https://supabase.com/docs/reference/javascript/v1/introduction).

Here’s a glimpse of what these endpoints might look like:

**Example-1: Creating a Blog Post**

This endpoint allows you to create a new blog post. It checks for required fields, interacts with the database, and returns a success or error message.

```ts
import { NextRequest, NextResponse } from 'next/server';  
import { supabase } from '../../../utils/supabaseClient';  
import { BlogPost } from '../../../utils/types';  

export async function POST(req: NextRequest) {  
  const { user_id, title, content, created_at }: BlogPost = await req.json();  

  if (!user_id || !title || !content || !created_at) {  
    return NextResponse.json({ success: false, message: 'Missing required fields' }, { status: 400 });  
  }  

  const { data, error } = await supabase  
    .from('blog_posts')  
    .insert([{ user_id, title, content, created_at }]);  

  if (error) {  
    return NextResponse.json({ success: false, message: 'Failed to create blog post', error: error.message }, { status: 500 });  
  }  

  return NextResponse.json({ success: true, message: 'Blog post created successfully', data }, { status: 200 });  
}  
```

**Example-2: Deleting a Comment**

Need to delete a comment from your blog post? Here’s a simple DELETE endpoint that makes it happen:

```ts
import { NextRequest, NextResponse } from 'next/server';  
import { supabase } from '../../../utils/supabaseClient';  

export async function DELETE(req: NextRequest) {  
  const { id } = await req.json();  

  if (!id) {  
    return NextResponse.json({ success: false, message: 'Missing required field: id' }, { status: 400 });  
  }  

  const { data, error } = await supabase.from('comments').delete().eq('id', id);  

  if (error) {  
    return NextResponse.json({ success: false, message: 'Failed to delete comment', error: error.message }, { status: 500 });  
  }  

  return NextResponse.json({ success: true, message: 'Comment deleted successfully', data }, { status: 200 });  
}  
```

These are just two examples of how you can structure your endpoints. The same approach can be applied to create users, retrieve blog posts, or manage comments.

With these API endpoints in place, your Next.js app becomes a functional backend, allowing smooth interaction with your Supabase database. You can test these endpoints using tools like Postman or cURL, or integrate them with your frontend for a complete application.

## Getting Your Blog Backend Running in No Time

Now that the groundwork is laid, it’s time to set up and run your backend application. We've provided a pre-built application and guides you through its setup using Daytona, ensuring a hassle-free environment configuration.

> The entire codebase for this backend application, including all API endpoints and configuration files, is available in our GitHub repository: 
[https://github.com/daytonaio-experiments/starter-nextjs-supabase](https://github.com/daytonaio-experiments/starter-nextjs-supabase)

Setting up a development environment can be tedious, but [Daytona](https://www.daytona.io/) simplifies the process. It handles environment configurations and dependency setups, allowing you to focus on development without getting bogged down by manual steps. With Daytona, spinning up this backend app is as simple as a few commands.

### Steps to Run the Application

**Requirements:**

- Daytona installed on your system.
- Docker up and running.
- Start the Daytona server by running:

```bash
daytona serve
```

**Setting Up the Workspace**

**1. Create and Open the Workspace:**

Use the following command to initialize the Daytona workspace while passing your **Supabase credentials** as **environment variables**:

```bash
daytona create https://github.com/your-repo --env "SUPABASE_URL=<your_supabase_url>" --env "SUPABASE_API_KEY=<your_supabase_api_key>"
```

**2. Run the Application**

After the workspace is created, start your development server using:

```bash
npm run dev
```

Your backend application will now be accessible at [http://localhost:3000](http://localhost:3000). Use this URL to interact with the API endpoints and verify the setup.

### Dev Container Configuration

The project includes a Dev Container setup to ensure a consistent and ready-to-use development environment. Here’s the configuration used for this application:

```json
{
    "name": "Next.js Backend with Supabase",
    "image": "ubuntu:22.04",
    "features": {
        "ghcr.io/devcontainers/features/common-utils:2.5.2": {
            "username": "daytona",
            "userUid": 1000,
            "userGid": 1000,
            "configureZshAsDefaultShell": true
        },
        "ghcr.io/devcontainers/features/node:1": {
            "nodeGypDependencies": true,
            "version": "lts",
            "nvmVersion": "0.40.0"
        },
        "ghcr.io/devcontainers/features/git:1": {}
    },
    "overrideFeatureInstallOrder": [
        "ghcr.io/devcontainers/features/common-utils",
        "ghcr.io/devcontainers/features/git",
        "ghcr.io/devcontainers/features/node"
    ],
    "portsAttributes": {
        "3000": {
            "label": "Next.js App",
            "onAutoForward": "notify"
        },
        "9229": {
            "label": "Node.js Debugger",
            "onAutoForward": "ignore"
        }
    },
    "customizations": {
        "vscode": {
            "extensions": [
                "dbaeumer.vscode-eslint",
                "esbenp.prettier-vscode",
                "ms-vscode.vscode-typescript-next",
                "mhutchie.git-graph"
            ]
        }
    },
    "workspaceFolder": "/workspaces/starter-nextjs-supabase",
    "onCreateCommand": "npm install",
    "remoteUser": "daytona"
}
```
**DevContainer Configuration Highlights**

This project includes a Dev Container setup to provide a standardized and ready-to-use development environment. 

Here’s a breakdown of the configuration:

- **name:** Sets the environment name to "Next.js Backend with Supabase".
- **image:** Uses the base image `ubuntu:22.04` to provide a consistent Linux development environment.
- **features:**
  - **common-utils:** Adds common utilities and sets up the environment for the user `daytona`.
  - **node:** Installs the latest stable version of Node.js with `nvm`, along with support for `node-gyp` dependencies.
  - **git:** Installs Git for version control.
- **overrideFeatureInstallOrder:** Specifies the order in which features are installed to ensure a smooth setup process.
- **portsAttributes:**
  - Configures **port 3000** for the Next.js application with automatic notifications for port forwarding.
  - Reserves **port 9229** for the Node.js debugger.
- **customizations:** Adds essential VSCode extensions, including:
  - ESLint for linting.
  - Prettier for code formatting.
  - TypeScript tools for enhanced development.
  - Git Graph for visualizing Git commits.
- **workspaceFolder:** Sets the workspace directory to `/workspaces/starter-nextjs-supabase`.
- **onCreateCommand:** Automatically runs `npm install` to set up project dependencies when the container is created.
- **remoteUser:** Specifies `daytona` as the user for the development environment.

This setup ensures you can start building and testing your application without worrying about environment inconsistencies or lengthy configurations.

### Test Your API Endpoints with cURL

Once your backend is up and running, it’s time to see it in action. Below are some **example cURL commands** you can run to interact with the API endpoints.

**Add a Blog Post**

This command creates a new blog post in the database. Replace the placeholder values with your own data to test the functionality.

```bash
curl -X POST http://localhost:3000/api/create-blog \
-H "Content-Type: application/json" \
-d '{
  "user_id": 1,
  "title": "My First Blog",
  "content": "This is my first blog post content.",
  "created_at": "2024-11-20T12:00:00Z"
}'
```

**What it does:** Inserts a new blog post into the `blog_posts` table with the provided `user_id`, `title`, `content`, and `created_at` timestamp.


**Retrieve All Blogs**

This command fetches all the blog posts stored in the database.

```bash
curl -X GET http://localhost:3000/api/get-blogs
```

**What it does:** Queries the `blog_posts` table and returns all the blog entries in JSON format. Use this to verify that the posts were added successfully.

**Delete a Comment**

This command deletes a specific comment from the database. Replace the id with the ID of the comment you want to remove.

```bash
curl -X DELETE http://localhost:3000/api/delete-comment \
-H "Content-Type: application/json" \
-d '{
  "id": 5
}'
```

**What it does:** Deletes the comment with the specified `id` from the `comments` table. Use this to clean up test data or remove unwanted entries.


These examples showcase how to interact with your backend. Copy and paste the commands into your terminal, customize the data as needed, and watch your database respond in real time!

## Conclusion

This guide took you through a hands-on journey of building a backend application effortlessly. With [database.build](https://database.build/), an AI tool, you saw how simple it is to design and generate database schemas in minutes. Pair that with [Supabase](https://supabase.com/) for managing your database and [Next.js](https://nextjs.org/) for writing API endpoints, and you have a strong foundation for any backend application. Finally, [Daytona](daytona.io) made running everything as easy as a few commands.

If you hit any roadblocks, the [Daytona team on Slack](https://go.daytona.io/slack) and their [GitHub repository](https://github.com/daytonaio/daytona) are there to help. Now it’s your chance to experiment, customize, and build something incredible. Let tools like database.build handle the heavy lifting, so you can focus on crafting impactful applications. Happy coding!