# FordFolkerson Algorithm

[Demo](https://mrganji9.github.io/fordfolkerson/)

# Graph-Theory-Ford-Fulkerson 

> Ford-Fulkerson Algorithm for Maximum Flow Problem
## Introduction

*When a Graph Represent a Flow Network where every edge has a capacity. Also given that two vertices, source 's' and sink 't' in the graph, we can find the maximum possible flow from s to t with having following constraints:*

1. Flow on an edge doesn't exceed the given edge capacity
2. Incoming flow is equal to Outgoing flow for every vertex excluding sink and source

## Algorithm

1. Start with f(e) = 0 for all edge e ∈ E.
2. Find an augmenting path P in the residual graph Gf .
3. Augment flow along path P.
4. Repeat until you get stuck.

## Example

*Consider the following graph*

<img src="/images/ford_fulkerson11.png">

*Maximum possible flow in the given graph is 23*

<img src="/images/ford_fulkerson2.png">

> graph definition in my js code
```javascript
const graphs = 
  { // My Sample Graph 1
    nodes: {
      "s": { id: 's', label: 'S'},
      "a": { id: 'a', label: 'A'},
      "b": { id: 'b', label: 'B'},
      "c": { id: 'c', label: 'C'},
      "d": { id: 'd', label: 'D'},
      "t": { id: 't', label: 'T'}
    },
    edges: {
      "0": { id: "0", from:"s", to:"a", arrows: "to", capacity:20, fill_capacity:0, label:"0/20", color: { color: "#2b7ce9" }, residual: false },
      "1": { id: "1", from:"s", to:"c", arrows: "to", capacity:30, fill_capacity:0, label:"0/30", color: { color: "#2b7ce9" }, residual: false },
      "2": { id: "2", from:"a", to:"b", arrows: "to", capacity:10, fill_capacity:0, label:"0/10", color: { color: "#2b7ce9" }, residual: false },
      "3": { id: "3", from:"a", to:"d", arrows: "to", capacity:20, fill_capacity:0, label:"0/20", color: { color: "#2b7ce9" }, residual: false },
      "4": { id: "4", from:"b", to:"t", arrows: "to", capacity:15, fill_capacity:0, label:"0/15", color: { color: "#2b7ce9" }, residual: false },
      "5": { id: "5", from:"c", to:"b", arrows: "to", capacity:20, fill_capacity:0, label:"0/20", color: { color: "#2b7ce9" }, residual: false },
      "6": { id: "6", from:"d", to:"t", arrows: "to", capacity:30, fill_capacity:0, label:"0/30", color: { color: "#2b7ce9" }, residual: false }
    }
  };

```

**Arguments:**
- `graph`: The Graph which representing the flow network
- `nodes`: Graph nodes
- `edges`: Graph edge

**Returns:** Returns a number representing the maximum flow.
