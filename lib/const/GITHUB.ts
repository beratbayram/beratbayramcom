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
// Private repos are filtered out on /projects, so a pinned one shows up only
// once it is public
export const PINNED = [
  "god-micro-frontend",
  "gulpsalot",
  "beratbayramcom",
  "little-lemon",
];
