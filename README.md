# View Interactive Resume and Project
Route to [my resume](https://imaybeniki.github.io/project-resume) to interact online.

# Use as a template for your own Interactive Resume

Feel free to use this resume as a template to showcase your own content, design, or code. Please provide credit for original content if doing so. The meta page, represented by a puzzle piece icon will detail the decisions that were made while putting together this project. I encourage beginner developers to understand the decisions behind code organization, tech stack used, and development process.

Click on the brain to learn about other fun topics in the world of code. Hopefully both the UI and codebase can serve as a playground for new developers.

Follow these steps to get rolling locally (dependent on [Node](https://nodejs.org/en/download/) and Node's package manager, [npm](https://www.npmjs.com/))

1. [Clone](https://docs.github.com/en/github/creating-cloning-and-archiving-repositories/cloning-a-repository) this repository to your local machine
2. From the base folder, run `npm i` to install the node_modules folder for all node dependencies in the project
3. When node completes install, run `npm start` to see the project 

## Update Header and Footer

In `molecules/footer` replace the URLs in `FooterContent.jsx`. This will link potential employers to your LinkedIn or GitHub in a new tab, or trigger and email to be sent to your address. The HTML should be simple to update with any other links, or information a footer may have. The header renders dynamically based on the URL. Fo the homepage, the header is pulled from `headerName` in `homepageDetails` within `pages/homepage/homepageDetails.json`. 

## Update Icons

In the `atoms` folder, there are folders for each icon type. To adjust icons, either replace the PNG file, or create a brand new icon. If you create a new icon, add the necessary references to `NavButton.jsx` at `atoms/NavButton` If you prefer to use an SVG file, simply copy the code of the SVG and paste it within the `return` on the render in a specific icon's component file (ex: `Education.jsx` in `src/atoms/ImageFiles/Education`). To render specific icons on the homepage, update the icons attribute of `homepageDetails` within `pages/homepage/homepageDetails.json`.

## Update Content

In the `content/data` folder, there are a series of JSON files that entail the metadata for the content, as well as the content itself. The `type` attribute of the object indicates the type of content box to render. Refer to the table below for possible types, and the attributes that can be added for them. Bold marks a required attribute. The content is filtered by `category`. The navigation icons will update the URL, which will be used to filter by category.

Type | Attributes
--- | --------
content | **date**, title, body
video | **date**, **url**, title, body
journal | **date**, title, body
experience | **date**, employer, position, start, end, description
icon | **date**, **iconName**, title, body

## Update Code

There is no better way to learn how to code than doing it. Try using the concepts to build your own content boxes and render them based on the `type` in your JSON file by simply following the structures existing and updating the HTML however you want. Check out the [Learn Page](https://imaybeniki.github.io/project-resume/learn) to for fun tips and tricks.
