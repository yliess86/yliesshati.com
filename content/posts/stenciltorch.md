---
title: "StencilTorch: an Iterative and User-Guided Framework for Anime Lineart Colorization"
date: "22/01/2023"
cover: "/images/publications/stenciltorch.webp"
min: 1
type: publication
tags:
    - deep-learning
    - python
    - pytorch
    - onnx
    - tensorflow-js
    - webapp
    - automatic-colorization
abstract: |
    This paper presents StencilTorch, a new approach to the task of automatic lineart colorization in
    computer vision. It is an interactive and user-guided framework that generates illustrations from
    a given lineart, color hints, and a mask, allowing for iterative workflows where the output of the
    first pass becomes the input of a second. This approach improves upon previous methods in both
    objective and subjective evaluations.
public: true
---

Automatic lineart colorization is a challenging task for Computer Vision. Contrary to grayscale images,
linearts lack semantic information such as shading and texture, making the task even more difficult. Modern
approaches train a Generative Adversarial Network (GAN) to generate illustrations from user inputs such as
color hints. While such approaches can generate high-quality outputs in real-time, the user only interacts
with the pipeline once at the beginning of the process. This paper presents StencilTorch, an interactive and
user-guided framework for anime lineart colorization motivated by digital artist workflows. StencilTorch
generates illustrations from a given lineart, color hints, and a mask allowing for iterative workflows where
the output of the first pass becomes the input of a second. Our method improves previous work on both objective
and subjective evaluations.

***Click on the paper image to read the paper.***

[![screenshot](/images/blog/stenciltorch_screenshot.webp)](https://doi.org/)