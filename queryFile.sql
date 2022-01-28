-- Select 5 most voted images
SELECT votes.image_id, COUNT(votes.id) FROM votes GROUP BY votes.image_id;