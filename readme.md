# Website with GitHub Issues

This website allows you to display GitHub issues for a repository. It utilizes npm packages, a custom hook for fetching issues, a header component, and pagination.

## Installation

1. Clone the repository.
2. Run `npm install` to install the required packages.

## Usage

1. Run `npm run dev` to start the development server.
2. Open your browser and navigate to `http://localhost:5173` to view the website.

## Custom Hook - useFetchIssues

The `useFetchIssues` hook is responsible for fetching issues from the GitHub API.



## Features

### Issue Fetching

The website includes a custom hook called `useFetchIssues` that interacts with the GitHub Issues API to fetch and retrieve the issues for a given repository. This hook handles the API calls and returns the fetched issues, along with loading and error states.

### Header Component

The Header component displays important information about the issues in a visually appealing manner. It shows the total count of open issues and closed issues for the repository. The component can be easily customized and styled to match your design preferences.

### Issue Listing

The website presents the issues in a clean and organized manner. Each issue is displayed with its title, number, labels, and creation date. You can easily browse through the list and get an overview of the issues at a glance.

### Pagination

To facilitate navigation through a large number of issues, the website includes a pagination component. This allows you to switch between different pages of issues and control the number of issues displayed per page. The pagination component makes it easier to browse through issues in an organized manner.



