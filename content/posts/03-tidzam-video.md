---
title: "Tidzam Video: Realtime Avian Video Classification"
date: "20/01/2023"
cover: "/images/blog/tidzam_video.webp"
min: 5
type: project
tags:
    - deep-learning
    - darknet
    - yolo-v1
    - inception-v3
    - avian-classification
abstract: |
    Cranberry farming in Southeastern Massachusetts transformed thousands of acres of natural wetlands into artificially elevated
    agricultural fields, causing negative impact on the environment. Now that the industry is less profitable in the region,
    policies and funding are being considered to encourage restoration.
public: true
---

Cranberry farming in Southeastern Massachusetts transformed thousands of acres of natural wetlands into artificially elevated
agricultural fields, causing negative impact on the environment. Now that the industry is less profitable in the region,
policies and funding are being considered to encourage restoration.

## Context

The [Living Observatory](http://www.livingobservatory.org/), a collaborative of scientists, artists, and restoration practitioners,
was founded in 2011 to document and interpret changes during restoration projects. Various projects are conducted, including one by
researchers at the [MIT Media Lab's Responsive Environments Group](https://www.media.mit.edu/groups/responsive-environments/overview/),
who developed a sensor network that documents ecological processes and allows people to experience the data at different spatial and
temporal scales. The network captures climate, soil, water, and other environmental data, as well as audio from high in the trees and
underwater, and can be experienced at any time of day, potentially catching an April storm, flock of birds, or army of frogs.

## Our Mission

As fellow engineering students, my comrades and I were asked to collaborate on this project to design and deploy a realtime avian
species boxing detector to automatically pre-label the video feeds from the old farm. These labels would later help the Living
Observatory community to analyse the movement of the bird populations and other activities.

![box-sample](/images/blog/tidzam_box_sample.webp)

## Realtime Video Classification

In this section, we discuss the process of training a video classification model for birds using the [YoloV1](https://pjreddie.com/darknet/yolo/)
model and the [Darknet](https://pjreddie.com/darknet/) framework. This includes the curation of the dataset, and the training process.

### Dataset Curation

The first step in training a video classification model is to gather a dataset that accurately represents the data that the model will be classifying. For this project, we used a dataset of videos of birds that were collected from various sources such as wildlife footage and bird-watching videos. The dataset was curated to include a wide variety of bird species and also included different lighting conditions, angles, and backgrounds.

The video boxes and labels were first initialized using a pretrained
[InceptionV3](https://www.cv-foundation.org/openaccess/content_cvpr_2016/papers/Szegedy_Rethinking_the_Inception_CVPR_2016_paper.pdf) on
[ImageNet](https://www.image-net.org/). The pretrained convnet is used offline to classify multiple window sizes from all the video frames we
collected. We then spent some time cleaning the labels and fixing the missing ones. 

### Training

Once the dataset was curated, we then used the [Darknet](https://pjreddie.com/darknet/) framework to train
the [YoloV1](https://pjreddie.com/darknet/yolo/) model on the dataset. The [YoloV1](https://pjreddie.com/darknet/yolo/)
model is a real-time object detection model that is well suited for video classification tasks. The training process involved using
the pre-trained weights from the model and fine-tuning them on our dataset. We used an Nvidia 980 GPU for the training process to
speed up the computations.

## Deployment

After the training process was completed, we then deployed the model on a target device for inference. The model was able to accurately
classify different bird species in real-time video footage with a high level of accuracy. The deployment process involved using the
Darknet framework to run the model on the target device, doing inference on the video streams coming from the
[Tidmarsh](https://tidmarsh.media.mit.edu/) sensors, and finally displaying them in a web application.

The labels provided by the model are finally saved with their corresponding timestep in the [Tidmarsh](https://tidmarsh.media.mit.edu/) database.