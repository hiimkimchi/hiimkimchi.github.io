const SHIELD_BASE = "https://img.shields.io/badge";

/** Add more by adding URLs to a category's shields array. */
export const SKILL_CATEGORIES: { title: string; shields: string[] }[] = [
  {
    title: "Languages",
    shields: [
      `${SHIELD_BASE}/Python-FFD43B?style=for-the-badge&logo=python&logoColor=3776AB`,
      `${SHIELD_BASE}/TypeScript-3178C6?style=for-the-badge&logo=typescript&logoColor=white`,
      `${SHIELD_BASE}/JavaScript-F7DF1E?style=for-the-badge&logo=javascript&logoColor=black`,
      `${SHIELD_BASE}/C%2B%2B-00599C?style=for-the-badge&logo=cplusplus&logoColor=white`,
      `${SHIELD_BASE}/C%23-239120?style=for-the-badge&logo=csharp&logoColor=white`,
      `${SHIELD_BASE}/Java-007396?style=for-the-badge&logo=java&logoColor=white`,
      `${SHIELD_BASE}/YAML-CB171E?style=for-the-badge&logo=yaml&logoColor=white`,
      `${SHIELD_BASE}/BAML-7C3AED?style=for-the-badge&logoColor=white`,
    ],
  },
  {
    title: "Frameworks & Web",
    shields: [
      `${SHIELD_BASE}/React-20232A?style=for-the-badge&logo=react&logoColor=61DAFB`,
      `${SHIELD_BASE}/Angular-DD0031?style=for-the-badge&logo=angular&logoColor=white`,
      `${SHIELD_BASE}/Express-000000?style=for-the-badge&logo=express&logoColor=white`,
      `${SHIELD_BASE}/Flask-000000?style=for-the-badge&logo=flask&logoColor=white`,
      `${SHIELD_BASE}/FastAPI-009688?style=for-the-badge&logo=fastapi&logoColor=white`,
      `${SHIELD_BASE}/OpenAPI-323330?style=for-the-badge&logo=openapiinitiative&logoColor=white`,
    ],
  },
  {
    title: "Databases",
    shields: [
      `${SHIELD_BASE}/MongoDB-47A248?style=for-the-badge&logo=mongodb&logoColor=white`,
      `${SHIELD_BASE}/PostgreSQL-4169E1?style=for-the-badge&logo=postgresql&logoColor=white`,
      `${SHIELD_BASE}/MySQL-4479A1?style=for-the-badge&logo=mysql&logoColor=white`,
      `${SHIELD_BASE}/Redis-DC382D?style=for-the-badge&logo=redis&logoColor=white`,
      `${SHIELD_BASE}/SQLite-003B57?style=for-the-badge&logo=sqlite&logoColor=white`,
      `${SHIELD_BASE}/Supabase-3ECF8E?style=for-the-badge&logo=supabase&logoColor=white`,
      `${SHIELD_BASE}/DynamoDB-4053D6?style=for-the-badge&logo=amazon-dynamodb&logoColor=white`,
    ],
  },
  {
    title: "DevOps",
    shields: [
      `${SHIELD_BASE}/Docker-2496ED?style=for-the-badge&logo=docker&logoColor=white`,
      `${SHIELD_BASE}/Git-F05032?style=for-the-badge&logo=git&logoColor=white`,
      `${SHIELD_BASE}/GitHub-181717?style=for-the-badge&logo=github&logoColor=white`,
      `${SHIELD_BASE}/Grafana-F46800?style=for-the-badge&logo=grafana&logoColor=white`,
      `${SHIELD_BASE}/Better_Stack-000000?style=for-the-badge&logo=betterstack&logoColor=white`,
    ],
  },
  {
    title: "AI",
    shields: [
      `${SHIELD_BASE}/PyTorch-EE4C2C?style=for-the-badge&logo=pytorch&logoColor=white`,
      `${SHIELD_BASE}/HuggingFace-FDEE21?style=for-the-badge&logo=HuggingFace&logoColor=black`,
    ],
  },
  {
    title: "Game Dev",
    shields: [
      `${SHIELD_BASE}/Unity-000000?style=for-the-badge&logo=unity&logoColor=white`,
      `${SHIELD_BASE}/Godot-478CBF?style=for-the-badge&logo=godotengine&logoColor=white`,
    ],
  },
  {
    title: "Cloud",
    shields: [
      `${SHIELD_BASE}/AWS-232F3E?style=for-the-badge&logo=amazonwebservices&logoColor=FF9900`,
      `${SHIELD_BASE}/Azure-0078D4?style=for-the-badge&logo=microsoftazure&logoColor=white`,
      `${SHIELD_BASE}/Cloudflare-F38020?style=for-the-badge&logo=cloudflare&logoColor=white`,
      `${SHIELD_BASE}/Vercel-000000?style=for-the-badge&logo=vercel&logoColor=white`,
      `${SHIELD_BASE}/Firebase-FFCA28?style=for-the-badge&logo=firebase&logoColor=black`,
    ],
  },
  {
    title: "Notable Commonly Integrated APIs",
    shields: [
      `${SHIELD_BASE}/Auth0-EB5424?style=for-the-badge&logo=auth0&logoColor=white`,
      `${SHIELD_BASE}/Stripe-00809D?style=for-the-badge&logo=stripe&logoColor=white`,
      `${SHIELD_BASE}/Steam-000000?style=for-the-badge&logo=steam&logoColor=white`,
    ],
  }
];