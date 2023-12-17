import projectData from "@/database/projects.json";

// function get all project data
const getAllProject = () => {
  return projectData.data;
};

// function get one item by slug
const getProjectBySlug = (slug: string) => {
  return projectData.data.find((element) => {
    return element.slug === slug;
  });
};

// function get all project data with paginate
const getAllProjectWithPaginate = (
  pageSize: number | 10,
  pageNumber: number
) => {
  return projectData.data.slice(
    pageSize * pageNumber,
    pageSize * pageNumber + pageNumber
  );
};

module.exports = { getAllProject, getProjectBySlug, getAllProjectWithPaginate };
