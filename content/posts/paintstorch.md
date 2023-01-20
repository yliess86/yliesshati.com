---
title: "PaintsTorch: a User-Guided Anime Line Art Colorization Tool with Double Generator Conditional Adversarial Network"
date: "21/01/2023"
cover: "/images/publications/paintstorch.webp"
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
    This paper presents a new approach for user guided-colorization of line arts in computer vision. The
    current state of the art uses GANs to generate realistic and precise colorization, but relies on randomly
    sampled pixels as color hints for training. This approach aims to improve upon this by introducing a stroke
    simulation based approach for hint generation, making the model more robust to messy inputs. We also propose
    a new cleaner dataset, and explore the use of a double generator GAN to improve visual fidelity.
public: true
---

The lack of information provided by line arts makes user guided-colorization a challenging task for computer
vision. Recent contributions from the deep learning community based on Generative Adversarial Network (GAN) have
shown incredible results compared to previous techniques. These methods employ user input color hints as a way
to condition the network. The current state of the art has shown the ability to generalize and generate realistic
and precise colorization by introducing a custom dataset and a new model with its training pipeline. Nevertheless,
their approach relies on randomly sampled pixels as color hints for training. Thus, in this contribution, we
introduce a stroke simulation based approach for hint generation, making the model more robust to messy inputs.
We also propose a new cleaner dataset, and explore the use of a double generator GAN to improve visual fidelity.

***Click on the paper image to read the paper.***

[![screenshot](/images/blog/paintstorch_screenshot.webp)](https://doi.org/10.1145/3359998.3369401)