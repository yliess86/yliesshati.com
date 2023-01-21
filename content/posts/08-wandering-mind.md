---
title: "Wandering Mind: An auditory Dream Odyssey"
date: "20/01/2023"
cover: "/images/blog/wandering_mind.webp"
min: 2
type: project
tags:
    - deep-learning
    - python
    - pytorch
    - umap
    - pandas
    - big-data
abstract: |
    The Wandering Mind project explores the use of audio in guiding meditation and dream exploration. Using a large corpus of audio data
    and techniques such as audio latent space analysis and UMAP dimensionality reduction, the project creates a 2D explorable manifold
    for users to navigate using physiological data. The goal is to create a more immersive and personalized audio experience for
    meditation and dream exploration.
public: true
---

We are excited to share with you our latest project, Wandering Mind, developed in collaboration with
[Gershon Dublon, Xin Liu](https://slowimmediate.com/), and Creative Technologist Students from the [DVIC](https://dvic.devinci.fr/).
This project aims to explore the realm of dreams and guide individuals through the process of meditation using a continuous audio experience.

## Audio Latent Space

The experience is built upon a vast corpus of audio samples from the [Aporee](https://aporee.org/) dataset. We trained a neural network to learn
the underlying structure of the audio, resulting in an audio latent space. This space organizes the audio chunks into correlated features that make
sense in both the semantic and audio domains.

![latent](/images/blog/wandering_mind_latent.webp)

## Dimensionality Reduction

The latent space, being too massive, was further reduced into a 2D explorable manifold using a mix of PCA and UMAP dimensionality reduction techniques.
This allows for a more manageable and intuitive exploration of the audio space.

## Physiological Monitoring

We drive the exploration of the audio manifold using physiological data such as skin conductance, heart rate, finger flexing, and other factors.
By monitoring these physiological responses, we aim to provide a personalized and immersive audio experience for the user.

A custom device has been created by [Thomas Juldo](https://thomasjuldo.com/), one of our student, specifically for the task and was inspired by
previous work from [Horowitz and al](https://doi.org/10.1016/j.concog.2020.102938).

![device](/images/blog/wandering_mind_device.webp)

## Deployment

Overall, Wandering Mind is a unique and exciting project that explores the potential of audio in guiding individuals through the process of
meditation and dream exploration. We hope that this project will inspire further research and development in this field.

The project was deployed at scale as an experience for the
[ONASSIS](https://www.onassis.org/whats-on/festival-you-and-ai-through-the-algorithmic-lens/artworks/the-wandering-mind) festival in a park in Lisbon.

![device](/images/blog/wandering_mind_lisbon.webp)