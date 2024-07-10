#!/bin/bash

start_date="2022-01-01"
end_date="2023-08-31"

current_date="$start_date"

while [ "$current_date" != "$end_date" ]; do
  echo "Commit on $current_date" > commit.txt
  git add commit.txt
  GIT_AUTHOR_DATE="$current_date 12:00:00" GIT_COMMITTER_DATE="$current_date 12:00:00" git commit -m "Commit on $current_date"
  current_date=$(date -I -d "$current_date + 1 day")
done

echo "All commits from $start_date to $end_date have been created."
