---
title: My first page
layout: base.njk
---

Hello index.md

<ul>
    <li>
        <a href="/" rel="canonical">Ínicio</a>
    </li>
    {% for post in collections.posts %}
    <li>
        <a href="{{ post.url }}" rel="canonical">{{ post.data.title }}</a>
    </li>
    {% endfor %}
</ul>

{% include "post.njk" %}

## Cat of the Day

<img src="{{ dogpic }}" width="100" height="100" alt="A dog pic"/>

<style>
    body {
        text-align: center;
    }
</style>
