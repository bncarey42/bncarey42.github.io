function htmlToPdf(data, options) {
    console.log('DOOOOOOOOT')

    let name = "_blank",
        specs = ["fullscreen=yes", "titlebar=yes", "scrollbars=yes"],
        replace = true,
        styles = [];

    if (options) {
        if (options.name) name = options.name;
        if (options.specs) specs = options.specs;
        if (options.replace) replace = options.replace;
        if (options.styles) styles = options.styles;
    }

    specs = !specs.length ? specs.join(",") : "";

    const url = "";
    const win = window.open(url, name, specs, replace);
    win.document.write(`<html lang="en">
  <head>
    <meta charset="utf-8" />
    <title>Ben Carey | Resume</title>
    <!-- DevIcons https://devicon.dev/ -->
    <link
      rel="stylesheet"
      href="https://cdn.jsdelivr.net/gh/devicons/devicon@v2.10.1/devicon.min.css"
    />
    <!-- uniicons - line icons -->
    <link
      rel="stylesheet"
      href="https://unicons.iconscout.com/release/v3.0.6/css/line.css"
    />
    <!--TAILWIND-->
    <script src="https://cdn.tailwindcss.com"></script>
    <!--VUE-->
    <script src="https://unpkg.com/vue@3"></script>
  </head>

  <body>
    <div id="app" class="max-w-[850px] mx-auto text-xs bg-white">
      <div class="w-full flex justify-start gap-3 mb-5">
        <div class="grow-0 w-28">
          <img
            src="https://avatars.githubusercontent.com/u/11987913?v=4"
            class="rounded-full w-full"
          />
        </div>
        <div class="grow">
          <h1 class="h-4/6 text-6xl text-dark font-semibold">{{ name }}</h1>
          <ul class="pl-1 flex justify-start gap-3 text-muted">
            <li v-for="contact in contacts" :key="contact">
              <div class="flex justify-between gap-2" v-if="contact.title">
                <icon
                  :icon="contact.icon"
                  :title="contact.title"
                  :link="contact.link"
                />
              </div>
            </li>
          </ul>
          <ul class="pl-1 flex justify-start gap-2 text-muted">
            <li v-for="site in sites" :key="site">
              <div class="flex justify-between gap-1" v-if="site.title">
                <icon :icon="site.icon" :title="site.title" :link="site.link" />
              </div>
            </li>
          </ul>
        </div>
      </div>
      <div class="w-full">
        <h2 class="mb-1 text-dark">Relevant Experience</h2>
        <ul class="ml-2">
          <li v-for="employer in releventWork" :key="employer.employer">
            <h3 class="text-dark mb-1">
              {{ employer.employer }}: {{employer.startDate}} -
              {{employer.endDate}}
            </h3>
            <div class="ml-2">
              <role
                :role="role"
                v-for="(role, key) in employer.roles"
                :key="key"
                class="mb-2"
              />
            </div>
          </li>
        </ul>
        <h2 class="mb-1 text-dark">Education</h2>
        <ul class="ml-2">
          <li v-for="edu in education" :key="edu.school">
            <education :education="edu" />
          </li>
        </ul>
      </div>
    </div>
  </body>
  <script>
    const { createApp } = Vue;

    app = createApp({
      data() {
        return {
          name: "Ben Carey",
          contacts: [
            { icon: "uil uil-house-user", title: "Des Moines, Iowa" },
            {
              icon: "uil uil-phone",
              title: "515-745-2869",
              link: "tel:5157452869",
            },
            {
              icon: "uil uil-envelope-alt",
              title: "carey.benjamin42@gmail.com",
              link: "mailto:carey.benjamin42@gmail.com",
            },
          ],
          sites: [
            {
              icon: "uil uil-globe margin-right",
              title: "bncarey42.github.io",
              link: "https://bncarey42.github.io",
            },
            {
              icon: "uil uil-github",
              title: "github.com/bncarey42",
              link: "https://github.com/bncarey42",
            },
            {
              icon: "uil uil-linkedin",
              title: "linkedin.com/in/benjamintcarey",
              link: "https://www.linkedin.com/in/benjamintcarey/",
            },
          ],
          work: [],
          education: [],
        };
      },
      created() {
        fetch(
          "https://api.github.com/repos/bncarey42/resume/contents/resume.json?ref=main",
          {
            method: "GET",
            headers: new Headers({
              Accept: "application/vnd.github.VERSION.raw",
            }),
            redirect: "follow",
          }
        )
          .then((response) => response.json())
          .then((data) => {
            this.work = data.work;
            this.education = data.education;
          })
          .catch((error) => console.error("error", error));
      },
      computed: {
        releventWork() {
          return this.work.filter((exp) => {
            return (
              new Date().getFullYear() -
                (isNaN(Number(exp.endDate.split(" ")[1]))
                  ? 2022
                  : Number(exp.endDate.split(" ")[1])) <
              6
            );
          });
        },
        otherWork() {
          return this.work.filter((exp) => false);
        },
      },
    });

    app.component("Icon", {
      name: "Icon",
      props: {
        icon: { type: String },
        title: { type: String },
        link: { type: String, required: false },
        size: {
          type: String,
          required: false,
          default: "md",
          validator(value) {
            return ["sm", "md", "lg"].includes(value);
          },
        },
      },
      template: /*html*/ \`<a :href="link" target="_blank" :class="{'flex justify-start items-center gap-1':true, 'cursor-pointer':link }">
        <i :class="icon"/><p>{{ title }}</p></a>\`,
    });

    app.component("Role", {
      name: "Role",
      props: {
        role: {
          type: Object,
          required: true,
        },
        project: {
          type: Boolean,
          required: false,
          default: false,
        },
      },
      template: /*html*/ \`<div class="mb-4">
    <div class="mb-1">
      <h3 class="text-dark">{{ role.title }}: {{ role.startDate }} - {{ role.endDate }}</h3>
      <p class="ml-2"><span class="font-semibold mr-1" v-if="role.description">{{
          project ? "Project Description" : "Role Description" 
        }}</span>{{ role.description }}</p>
    </div>
    <div class="ml-2">
      <div v-if="role.technologies?.length" >
        <h4 class="mb-1">Technologies:</h4>
        <ul class="inline-grid grid-cols-9 gap-1 w-full">
          <li class="text-center" v-for="(tech, key) in role.technologies" :key="key">
            <icon :icon="tech.icon" :title="tech.title" />
          </li>
        </ul>
      </div>
      <div v-if="role.duties?.length">
        <h4>Responsibilities:</h4>
        <div class="ml-2">
          <ul>
            <li class="list-disc" v-for="(duty, key) in role.duties" :key="key">{{ duty }}</li>
          </ul>
        </div>
      </div>
      <div v-if="role.projects?.length" class="mb-2">
        <h4 class="mb-1">Projects:</h4>
        <div class="ml-2">
          <role :role="project" project v-for="(project, idx) in role.projects" :key="idx"/>
        </div>
      </div>
    </div>
  </div>\`,
    });

    app.component("Education", {
      name: "Education",
      props: {
        education: {
          type: Object,
          required: true,
        },
      },
      template: /*html*/ \`<h3 class="text-dark">{{education.degree}}</h3>
      <div class="ml-2">
                    <h4 class="">{{ education.school }} - {{ education.city }}</h4>
                    <p>Graduated: {{ education.yearGraduated }}</p>
                    <p v-for="ex in education.extra" key="ex">{{ex}}</p></div>\`,
    });
    app.mount("#app");
  </script>
  <style>
    @import url("https://fonts.googleapis.com/css2?family=Ubuntu&display=swap");

    :root {
      --main-text: #2d435b;
      --muted: #535b71;
      --accent: #ff9f7c;
      --links: #638181;
      font-family: "Ubuntu", sans-serif;
    }

    .text-dark {
      color: var(--main-text) !important;
    }

    .text-muted {
      color: var(--muted) !important;
    }

    .text-accent {
      color: var(--accent) !important;
    }

    h2 {
      font-size: 1.40em;
      font-weight: bold;
    }

    h3 {
      font-size: 1.32em;
      font-weight: bold;
    }

    h4 {
      font-size: 1.24em;
      font-weight: semi-bold;
    }
  </style>
</html>`);

    setTimeout(() => {
        win.document.close();
        win.focus();
        win.print();
        win.close();
    }, 1000);

    return true;
};

export default htmlToPdf;
