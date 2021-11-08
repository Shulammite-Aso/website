---
section: ide
title: GoLand
---

<script context="module">
  export const prerender = true;
</script>

# {title}

## Desktop

We currently have support for JetBrains GoLand (in private Beta). If you're interested to be part of the private Beta group, [leave a comment in this GitHub issue](https://github.com/gitpod-io/gitpod/issues/6342). If you have any issues with the IntelliJ GoLand Beta, you can [leave feedback in this GitHub issue](https://github.com/gitpod-io/gitpod/issues/6576).

> **Important:** The current JetBrains private Beta works via [Code With Me](https://www.jetbrains.com/code-with-me/) to facilitate early Beta testing. The final JetBrains is expected not to require use of Code With Me. The Beta implementation means that anyone who might discover the workspace URL could potentially get access to your workspace. Therefore, you should only use the JetBrains Desktop Beta for projects that are non-critical, and be careful with any secrets or access granted to a workspace that is connected to JetBrains Desktop.

## Browser (via Jetbrains Projector)

Did you know you can run JetBrains IDEs in a browser? Thanks to [JetBrains Projector](https://lp.jetbrains.com/projector/) IntelliJ-based and Swing-based IDEs can run on servers, allowing you to access them from anywhere using your browser. Here's an example template: [gitpod-io/template-jetbrains-goland](https://github.com/gitpod-io/template-jetbrains-goland).

Simply click "Open in Gitpod" button to launch the GoLand IDE in your browser.

### Additional reading

To learn more about JetBrains Projector, head to:

- https://blog.jetbrains.com/blog/2021/03/11/projector-is-out
- https://jetbrains.github.io/projector-client/mkdocs/latest
