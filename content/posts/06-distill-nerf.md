---
title: "DistillNeRF: Data-Efficient Initialization of Neural radiance Fields using Knowledge Distillation"
date: "20/01/2023"
cover: "/images/blog/distill_nerf.webp"
min: 1
type: project
tags:
    - deep-learning
    - python
    - pytorch
    - cuda
    - opengl
    - neural-radience-field
abstract: |
    This paper presents DistillNeRF, a method for creating smaller, more efficient Neural Radiance Fields (NeRF)
    models for real-time applications using Knowledge Distillation (KD). The approach optimizes training time by
    using a priority grid from a teacher network as a proxy for better training examples, reducing the loss of
    perceptual quality while using half the memory. This data-efficient method allows for faster inference
    times without sacrificing quality.
public: true
---

Neural Radiance Fields (NeRF) learn a high-quality continuous 3D implicit representation of a scene given multiple views.
While the approach has gained popularity in Novel View Synthesis (NVS), its vanilla implementation is not suited for realtime
applications. This paper presents DistillNeRF, a data-efficient method for initializing and breeding smaller models using Knowledge
Distillation (KD). Smaller models naturally benefit from lower inference times but decrease in perceptual quality. DistillNeRF
optimizes training time and builds a priority grid from a teacher network as a data-efficient proxy for sampling better training
examples reducing the quality loss while using half the memory.

***Click on the paper image to read the paper.***

[![screenshot](/images/blog/distillnerf_screenshot.webp)](https://github.com/yliess86/DistillNeRF/blob/main/paper/DistillNeRF__Data_Efficient_Initialization_of_Neural_Radiance_Fields_using_Knowledge_Distillation.pdf)