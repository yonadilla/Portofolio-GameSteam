export default async function queryFetch (query, variable)  {
    const res = await fetch("https://leetcode.com/graphql", {
        method: "POST",
        headers: { "Content-Type": "application/json" , 'Access-Control-Allow-Origin': '*', },
        body: JSON.stringify({
            query: query,
            variable: variable
        })
    });
    return res.json;
}