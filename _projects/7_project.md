---
layout: page
title: Lightweight Heat Stress Detection for Cow Health Monitoring
description: DSCC 383W Capstone Project
img: assets/img/zalliant.jpeg
importance: 1
category: featured
---

As part of our data science capstone project in collaboration with Zalliant, we developed and evaluated lightweight methods for detecting heat stress events in cattle using continuous rumen temperature data collected from IoT bolus sensors. The goal was to determine whether modern machine learning approaches could improve upon Zalliant's existing statistical monitoring system while remaining computationally efficient enough for real-world deployment.

We compared several supervised and deep learning models, including Logistic Regression, XGBoost, and LSTM networks, against robust statistical approaches for anomaly detection. After extensive evaluation, we designed a context-aware statistical pipeline that combines rolling median baseline estimation, median absolute deviation (MAD)-based anomaly scoring, adaptive animal-specific thresholds, and persistence filtering to identify sustained temperature elevations indicative of heat stress.

Our proposed method achieved 80% accuracy, 86.7% recall, and 81.3% F1 score, while detecting heat stress events a median of 9 hours earlier than Zalliant's current alert system. Unlike more computationally expensive machine learning models, our approach maintained strong performance with significantly lower operational costs, enabling reduced sensor sampling rates, longer device battery life, and the potential for substantial savings for both farmers and the company. These results demonstrate that thoughtfully designed statistical methods can outperform complex AI models for resource-constrained, real-time monitoring applications.

[Presentation](https://chattergpt.github.io/assets/pdf/Capstone_Final.pdf)    |
[Poster](https://chattergpt.github.io/assets/pdf/Hajim_Design_Day_Poster.pdf)    |
[Paper](https://chattergpt.github.io/assets/pdf/ZalliantAI_Final_Report.pdf)
