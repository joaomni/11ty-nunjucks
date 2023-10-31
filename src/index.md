---
title: My first page
layout: base.njk
---

Hello index.md

<ul>
{% for post in collections.posts %}
<li><a href="{{ post.url }}">{{ post.data.title }}</a></li>
{% endfor %}
</ul>

{% include "post.njk" %}

## Cat of the Day

<img src="{{ dogpic }}" />
