---
title: Jiu Jitsu Notes
description: In this article I'll discuss what Jiu Jitsu Notes is, how it works, and the science behind it.
date: 2023-10-14
---

[Jiu Jitsu Notes](https://jiujitsunotes.com/) is a platform I built & maintain to provide athletes an alternative approach to studying and intellectualising the sport of Brazilian Jiu Jitsu.

## Jiu Jitsu as a Graph

Jiu Jitsu is a grappling combat sport - similar to wrestling - which lends itself to being modelled as a directed graph. The nodes of the graph are discrete positions, and the edges are transitions between those positions.

Jiu Jitsu Notes leverages this graph model to provide a structure for incrementally designing a "game plan" as the athlete learns new positions and transitions.

## Learning with Active Recall & Visualisation

Active recall is a learning technique that involves actively retrieving information from memory, as opposed to passively reviewing information, such as re-reading notes or watching instructional videos - one of the more common approaches to learning Jiu Jitsu.

Jiu Jitsu Notes implements active recall by providing a self-testing mechanism where athletes traverse the directed graph of positions and techniques, and are prompted to recall the available techniques from each position in order to progress.

This approach also allows users to visualise techniques and positions as they study, increasing the effectiveness of the learning process and providing faster recall during training and competition.

## Development Stack

The app is built with a JavaScript React (Vite) front-end, and a Python Django back-end. The front-end is deployed automatically to GitHub Pages via GitHub Actions, and the back-end is deployed automatically to Heroku, using Heroku's automatic git repository deployment system.
