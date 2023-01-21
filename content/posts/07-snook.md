---
title: "Snook: Augmented Pool Framework for Playful Learning Applications"
date: "20/01/2023"
cover: "/images/blog/snook.webp"
min: 5
type: project
tags:
    - deep-learning
    - python
    - pytorch
    - landmark-detection
    - tiny-ml
    - pool
    - playful-learning
abstract: |
    The Snook project is an augmented pool table framework for playful learning that incorporates game design and advanced technologies
    like 3D modeling, computer vision, and machine learning to make learning physics and geometry fun and interactive. It uses a virtual
    laboratory for experimentation and discovery to enhance the educational experience and make learning more engaging and effective.
public: true
---

## Context

Playful learning is an innovative approach to education that incorporates elements of game design and play into the learning
process. The [Snook](https://dvic.devinci.fr/projects/educationnal-billard) project is a perfect example of this approach, as
it provides an augmented pool table framework for playful learning applications. By using this framework, users can learn about
physics and geometry in a fun and interactive way, using the pool table as a virtual laboratory for experimentation and discovery.

## Modelisation

The use of advanced technologies such as 3D modeling, computer vision, and machine learning allows the Snook project to provide
a highly immersive and engaging experience for users, making learning more enjoyable and effective. Overall, the Snook project
is a prime example of how playful learning can be used to enhance the educational experience and make learning more engaging
and effective. In the followup sections describe the technical details of the project.

### Data Curation

I opted for a simulation-to-real approach where the dataset is synthetically produced. This method present the advantage of requiring
few real labeled sample to adapt for real world usage.

The 3D pool table and assets including the balls, the cues, and accessories were modeled in [Blender](https://www.blender.org/).
[HDRI maps](https://hdri-haven.com/) were also collected to be used as lighting for the generated scenes.

[Blender](https://www.blender.org/) has a [Python API](https://docs.blender.org/api/current/index.html). This feature allowed me
to implement scripts to generate and render arbitrary arrangements of the pool scenes. This allowed to create a large dataset of
different positions and configurations of the pool table and accessories, in various lighting conditions. I also exported the balls
and cues landmark positions in image coordinate during the data generation process. The landmarks are then used to generate a
single positional heatmap.

Finally, data augmentation techniques like motion blur, color shifting, and image rotation are used to increase the diversity
of the dataset and improve the robustness of our model.

![data](/images/blog/snook_data.webp)

### Model Architecture

To keep the model lightweight and fast enough for real-time applications, I used a Tiny Model architecture. This included
a [UNet](https://arxiv.org/abs/1505.04597) Autoencoder with [ConvNeXt](https://arxiv.org/abs/2201.03545) blocks and depthwise
separable convolutions. The model was designed for inference speed and is accompanied by an external tiny convnet for ball/queue
color classification.

Peak detection is used for recovering the assets positions from the heatmap. The landmarks are finally used to crop the assets
from the raw image and further apply classification for recovering the asset identification/color detection.

### Model Training

The model is trained using the AdamW optimizer and default hyperparameters.

![training](/images/blog/snook_training.webp)

## Results

The tiny Neural Nets are able to perform both inference and classification at a speed of 200 FPS. However, the model do
present miss classifications for the assets' identification. Overall, the results allowed to validate this proof of concept.

![pred](/images/blog/snook_pred.webp)
![inference](/images/blog/snook_inference.webp)

The project has not been deployed to the interactive pool table, but aims at providing a baseline for future work by the
potential future students working on the topic.