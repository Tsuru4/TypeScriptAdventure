# Overview

This project is a webpage which will share a "choose your own adventure" story with the viewer/user. 

Prior to this, I made the same project in JavaScript, but there were many many flaws in the way I designed it, and I was not fully satisfied with my work nor the language.

As a specific problem in my work, I neglected the principles of encapsulation and abstraction at the start. By the time I realized how badly this was affecting my code, I was already well into the project, and there was no longer an "easy fix". It made the entire project messy, and it was unreasonably difficult to adapt the project to any changes.

Additionally, this is my first time using TypeScript, and I am eager to make a direct compare and contrast between this and JavaScript. Rebuilding my past project from the ground up will be an ideal way to see the differences.



This video was made when I was approximately 20 hours into the project. Features you see in the video may change as I continue to expand on this project.

[Video](https://youtu.be/fAXVlX7CK5M)

# Development Environment

Note: I use MacOS for the majority of my programming. Some of my instructions for setting up the enviornment may be Mac specific. 

Development Tools:
- Visual Studio Code 1.121.0
- NPM (Node Package Manager) 11.14.1

Languages:
- HTML
- CSS
- Javascript
- Typescript 6.0.3

Libraries:
- ESLint
- ESLint (The VSCode extension, which has the same name as the actual ESLint).

# Useful Websites

- [Typescriptlang.org](https://www.typescriptlang.org/)
- [Visualstudiocode.com](https://code.visualstudio.com/docs/languages/typescript)
- [Google.com](https://google.com/search) Particuarly helpful for MacOS specific instalation instructions.
- [Youtube Net Ninja's TypeScript Tutorials](https://www.youtube.com/watch?v=Y4IiQY9dNRA&list=PL4cUxeGkcC9gUgr39Q_yD6v-bSyMwKPUI&index=7)

# To Do List

- [x] Research basic TypeScript principles and experiment with small projects such as Hello World.
- [x] Investigate asynchronous functions and consider how they could enhance the project.
- [x] Investigate the uses of ESLint.
- [x] Write out new class documentation with careful attention to abstraction and encapsulation.
- [x] Write out classes based on documentation described in TypeScriptAdventure.ts comments.
- [x] Test classes with React console.
- [x] Establish module 
- [x] Test classes with index.HTML
- [x] Fix the chapter headings.
- [x] Implement the character name replacing feature.
- [ ] Tweak features to allow default names.
- [ ] Implement the minigames.
- [ ] Clean up unnessecary functions and files.
- [ ] Complete story.
- [ ] Address edge cases.
- [ ] Polish CSS.
- [ ] Add functions to support pictures.
- [ ] Add functions to animate a character avatar (I might not actually get to this).
- [ ] Remove unnessecary files relating to React from repository.


# Useful Commands
- To install typescript on MacOS: sudo npm install -g typescript
- Many instructions online seem to leave sudo out of that command, but for MacOS, sudo is needed for installing many tools or the OS will reject the installation.
- Check current npm version: npm -v
- Check current typescript version: tsc --version
- Install ESLint in local workspace: sudo npm install --save-dev eslint
- Initialize ESLint : sudo npm init @eslint/config@latest

- Compile from Typescript to Javascript: tsc "filename".ts
- Test Javascript file in VSCode terminal using node: node "filename".js