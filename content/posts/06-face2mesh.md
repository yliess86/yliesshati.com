---
title: "Face2Mesh: Face 3D Mesh Extration from a Single Front Facing Photo"
date: "20/01/2023"
cover: "/images/blog/face2mesh.webp"
min: 2
type: project
tags:
    - deep-learning
    - python
    - pytorch
    - 3dmm
    - graph-neural-net
abstract: |
    The Face2Mesh project explores the use of Graph Convolutional Neural Networks to generate 3D meshes from a single 2D facial image.
    The objective is to create a non-linear 3D morphable model using in-the-wild photos. The project utilizes Chebyshev Spectral
    Approximation of a Graph Convolution and Mesh Pooling for dimensionality reduction. A small dataset of sculpted faces of friends and family
    was created for the exploration. Results showed good reconstruction of general shape and low-frequency features, but noise in high-frequency details.
public: true
---

The Face2Mesh project is an exploration into the use of Graph Convolutional Neural Networks (GCNN) for generating 3D meshes from
single frontal images of faces. The long term goal of this project is to create a non-linear 3D morphable model (3DMM) built from
"in-the-wild" photos. This model can be used for a variety of applications, such as facial animation, virtual try-on, and facial
recognition. In my case specifically I plan to use this project ot extend my work on
[Text-Driven Mouth Animations](/blog/04-audio-driven-mout-animations) to Text-Driven Facial Animations.

## Data Creation

One of the key steps in any machine learning project is creating a high-quality dataset. For the Face2Mesh project, I spent hours recreating
and sculpting the faces of my friends and family in [Blender](https://www.blender.org/). I used the same base mesh for vertex conservation,
and the goal was to provide a small, toy dataset for this exploration.

![data](/images/blog/face2mesh_data.webp)

## Model Architecture

The model architecture used in the Face2Mesh project was built with GCNNs, using Chebyshev Spectral Approximation of a Convolution for Graphs using
message passing. Mesh Pooling is used to reduce the dimensionality of the extracted mesh features, which is an equivalent of Max Pooling for Images.
It consists of reducing the number of vertices in the mesh while preserving the general shape of the mesh using a quadratic error.

![data](/images/blog/face2mesh_pooling.webp)

## Results

The model was trained on a dataset of 2D facial images and corresponding 3D meshes. During evaluation, the model was able to achieve good reconstruction
of the general shape and low-frequency features of the faces. However, there was noise present in the high-frequency details. To mitigate this, a
smoothness penalty was added to the objective function, which helped to reduce the noise but resulted in a loss of detail.

![data](/images/blog/face2mesh_results.webp)