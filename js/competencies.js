// Skills data for each competency
const competencySkills = {
  'product-strategy': [
    'Agile (Scrum, Kanban)', 'Product Roadmapping, Sprint Planning, Backlog Grooming', 'MVP Scoping', 'Go-to-Market (GTM) Strategy', 'Product-Led Growth (PLG)', 'A/B Testing', 'Monetization Strategy', 'OKRs & User Story Mapping', 'Program Management'
  ],
  'data-analytics': [
    'SQL (SQL server, BigQuery, PostgreSQL)', 'Python (Pandas, NumPy, scikit-learn)', 'dbt, Tableau, Power BI, Looker', 'SSRS, Snowflake, Metabase', 'Excel, Google Sheets'
  ],
  'cloud-data-eng': [
    'Azure Data Factory', 'Databricks', 'Snowflake', 'Azure Synapse', 'Airflow', 'PySpark', 'ELK Stack', 'GCP', 'Git & CI/CD Pipelines'
  ],
  'product-ops-ux': [
    'Requirement Gathering', 'Agile Ceremonies (Standups, Retrospectives)', 'Cross-functional Collaboration', 'Stakeholder Management', 'Voice of Customer (VoC)', 'UX Wireframing', 'Figma', 'JIRA', 'Confluence', 'Miro'
  ],
  'ai-llm': [
    'OpenAI API', 'LangChain', 'Prompt Engineering', 'Azure ML (basic)', 'Semantic Search', 'Generative AI for Personalization'
  ],
  'tech-collab': [
    'REST APIs (Postman, Swagger)', 'Jupyter Notebook', 'Git/GitHub', 'Terminal', 'Feature Flagging (LaunchDarkly)', 'Notion', 'Slack Integrations', 'Zapier'
  ]
};
// Modal logic
(function() {
  const modal = document.getElementById('competency-modal');
  const modalTitle = modal.querySelector('.competency-modal-title');
  const modalSkills = modal.querySelector('.competency-modal-skills');
  const closeBtn = modal.querySelector('.competency-modal-close');
  let animTimeout = null;
  document.querySelectorAll('.competency-card .competency-hover-overlay').forEach(overlay => {
    overlay.addEventListener('click', function(e) {
      e.stopPropagation();
      const card = this.closest('.competency-card');
      const key = card.getAttribute('data-competency');
      // Fill modal
      modalTitle.textContent = card.querySelector('.competency-label').textContent;
      modalSkills.innerHTML = competencySkills[key].map(skill => `<li>${skill}</li>`).join('');
      // Show modal
      modal.classList.add('open');
      // Animate content
      modal.querySelector('.competency-modal-content').style.opacity = 0;
      setTimeout(() => {
        modal.querySelector('.competency-modal-content').style.opacity = 1;
      }, 10);
    });
  });
  // Close modal
  function closeModal() {
    modal.querySelector('.competency-modal-content').style.animation = 'none';
    modal.querySelector('.competency-modal-content').offsetHeight; // force reflow
    modal.querySelector('.competency-modal-content').style.animation = 'modalOpenAnim 0.35s reverse forwards';
    setTimeout(() => {
      modal.classList.remove('open');
      modal.querySelector('.competency-modal-content').style.animation = '';
    }, 320);
  }
  closeBtn.addEventListener('click', closeModal);
  modal.addEventListener('click', function(e) {
    if (e.target === modal) closeModal();
  });
  document.addEventListener('keydown', function(e) {
    if (modal.classList.contains('open') && (e.key === 'Escape' || e.keyCode === 27)) closeModal();
  });
})();
