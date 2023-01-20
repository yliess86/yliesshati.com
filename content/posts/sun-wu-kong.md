---
title: "Sun Wu Kong: Audio Queries for Video Game Interaction"
date: "19/01/2023"
cover: "/images/blog/sunwukong.webp"
min: 11
type: project
tags:
    - deep-learning
    - c-sharp
    - unity-3d
    - audio-recognition
abstract: |
    The Sun Wu Kong project explores the use of audio commands to control the magical abilities of the main character
    in a video game based on the Chinese legend of Sun Wu Kong. Players can control Sun Wu Kong's magical Cloud and
    Stick using their voice, thanks to the speech classification system. This creates a more immersive and
    intuitive gaming experience.
---

The project Sun Wu Kong is an innovative research endeavor that aims to investigate the use of audio queries as a means of controlling the magical abilities of the main character in a video game. The game is based on the classic Chinese legend of Sun Wu Kong, King of the Apes, and it allows players to experience the unique gameplay mechanics of controlling Sun Wu Kong's magical Cloud and his magical Stick that can grow or shrink on demand.

The concept of using audio queries to control the magical abilities of the character is a novel approach to video game interaction. This system utilizes advanced techniques in speech recognition and natural language processing to interpret the player's spoken commands and map them to specific actions in the game. This allows for a more immersive and intuitive gaming experience, as players can use their voice to control the character's movements and abilities.

The incorporation of audio queries in video games has the potential to revolutionize the way we interact with virtual worlds and characters. By using audio queries, we aim to open up new possibilities for video game interaction, making the game accessible to a wider range of players, including those with disabilities, who may have difficulty using traditional input methods such as keyboard and mouse.

The Sun Wu Kong project was realized as my first engineering year project and won the first prize after deliberation by a jury composed of professors, students, and external collaborators from the school. In this blog post, I will examine the technical aspects of the audio query system and reflect on the lessons learned from the project, including the importance of user testing and comparison to traditional input methods. Unfortunately, I was not rigorous enough to have conducted a proper user study with comparisons to the baseline of using a standard input system such as a gamepad or a keyboard and mouse combo. Do not expect a state-of-the-art. I went almost blind and this is not how I would proceed nowadays.

> The goal of this post is to keep a trace of an old project and remind me of my beginner mistakes.

## Audio Classification

The audio classification system of Sun Wu Kong was a crucial component for the successful implementation of audio queries as a means of controlling the in-game actions. This section describes the techniques and methods used for this purpose.

### Data Preprocessing

The audio was captured from the default microphone at a 16kHz sample rate for a period of 2 seconds. The envelope of the absolute signal was then extracted and transformed into a binarized image to later serve as input for the classification model.

![audio](/images/blog/action_envelopes.webp)

### Data Collection

The dataset was composed of audio/label pairs collected via a Unity3D app specifically developed for this purpose. I remember spending Christmas holidays recording audio samples for each of the following actions: `Shrink`, `Grow`, `Reset`, `Nimbus`.

### Modeling

The classification model used at the time was a simple Multi-Layer Perceptron (MLP) trained on my curated dataset using simple Stochastic Gradient Descent (SGD). A custom deep learning and training engine was developed in C# for this task. It was quite simple and rudimentary but it did the job.

### Evaluation

The model was evaluated on a test set, a small portion of the dataset removed from the audio/label pairs. The model achieved an accuracy of 84%.