/*
Refetch pinned repositories from GitHub GraphQL API
https://docs.github.com/en/graphql/overview/explorer

query {
  user(login: "beratbayram") {
    pinnedItems(first: 6, types: [REPOSITORY]) {
      nodes {
        ... on Repository {
          name
        }
      }
    }
  }
}
*/
export const PINNED = [
  "god-micro-frontend",
  "dispochat-front",
  "battleground",
  "yte-internship-2024",
  "beratbayramcom",
  "yte-internship-2023",
];
