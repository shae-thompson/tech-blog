const newPostHandler = async (event) => {
    event.preventDefault();
  
    const title = document.querySelector('#post-title').value.trim();
    const description = document.querySelector('#post-desc').value.trim();
  
    if (title && description) {
      const response = await fetch(`/api/post`, {
        method: 'POST',
        body: JSON.stringify({ title, description }),
        headers: {
          'Content-Type': 'application/json',
        },
      });
  
      if (response.ok) {
        document.location.replace('/post');
      } else {
        alert('Failed to create post');
      }
    }
  };
  
  const delPostHandler = async (event) => {
    if (event.target.hasAttribute('post-id')) {
      const id = event.target.getAttribute('post-id');
  
      const response = await fetch(`/api/posts/${id}`, {
        method: 'DELETE',
      });
  
      if (response.ok) {
        document.location.replace('/post');
      } else {
        alert('Failed to delete post');
      }
    }
  };
  
  document
    .querySelector('.new-post-form')
    .addEventListener('submit', newPostHandler);
  
  document
    .querySelector('.post-list')
    .addEventListener('click', delPostHandler);
  