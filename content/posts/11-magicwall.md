---
title: "MagicWall: A Plateform for Realtime Interactive Art Installations"
date: "20/01/2023"
cover: "/images/blog/magicwall.webp"
min: 1
type: project
tags:
    - deep-learning
    - python
    - pytorch
    - cuda
    - opengl
    - style-transfert
abstract: |
    MagiWall is a realtime interactive art installation that updates traditional museum painting frames with embedded cameras and style
    transfer models to enhance visitor experience. It uses PyTorch and CUDA for training, Python and OpenGL for display, and CUDA OpenGL
    API for optimized GPU performance. Currently deployed at a French university, it shows the potential for technology to enhance museum
    experience and integrate digital art into physical spaces.
public: true
---

Interactive art installations have become increasingly popular in museums and galleries, allowing visitors to engage with and experience art in new and exciting ways. The MagiWall project takes this concept a step further by updating the traditional museum painting frame to a frame with embedded cameras and realtime style transfer models.

## Model Architecture
The real-time style transfer model was trained using PyTorch and CUDA for optimized GPU performance. It was then deployed using Python and OpenGL for
display, and the CUDA OpenGL API to avoid transfers between RAM and VRAM, resulting in a frame rate of up to 30 FPS on 4k screens on an NVIDIA 3060 laptop.

## Deployment

The demo of the MagiWall project is currently deployed at the Campus de L'Arche in Nanterre, France, where staff and students interact with the digital
piece of art on a daily basis while waiting for the elevator.

![preview](/images/blog/magicwall_preview.webp)

The MagiWall project demonstrates the potential of real-time interactive art installations and the power of technology to enhance the museum experience.
It is an exciting glimpse into the future of digital art and its integration into physical spaces.