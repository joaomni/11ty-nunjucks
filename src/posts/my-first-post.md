---
title: First post
---

First post content

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