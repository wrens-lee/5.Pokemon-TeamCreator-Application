import {Client} from 'pg';

const createTable = `
CREATE TABLE IF NOT EXISTS pokemon (
    id INTEGER PRIMARY KEY,
    name VARCHAR(255) NOT NULL,
    types TEXT[] NOT NULL,
    gender_rate INTEGER NOT NULL,
    sprite VARCHAR(255),
    shiny_sprite VARCHAR(255)
);

CREATE TABLE IF NOT EXISTS teams (
    id INTEGER PRIMARY KEY GENERATED ALWAYS AS IDENTITY,
    trainer_name VARCHAR(255) NOT NULL
);

CREATE TABLE IF NOT EXISTS team_pokemon (
    id INTEGER PRIMARY KEY GENERATED ALWAYS AS IDENTITY,
    team_id INTEGER NOT NULL REFERENCES teams(id) ON DELETE CASCADE, 
    pokemon_id INTEGER NOT NULL REFERENCES pokemon(id),
    slot SMALLINT NOT NULL CHECK (slot BETWEEN 1 AND 6),
    gender VARCHAR(10),
    is_shiny BOOLEAN NOT NULL DEFAULT FALSE,
    UNIQUE (team_id, slot)
);`

const team_ash = `
WITH temp_table AS (
    INSERT INTO teams (trainer_name) VALUES ('Ash') RETURNING id
)
INSERT INTO team_pokemon (team_id, pokemon_id, slot, gender, is_shiny)
SELECT temp_table.id, v.pokemon_id, v.slot, v.gender, false 
FROM temp_table, 
    (VALUES
    (25, 1, 'male'), 
    (12, 2, 'male'), 
    (18, 3, 'male'),
    (1, 4, 'male'),
    (6, 5, 'male'),
    (7, 6, 'male')
    ) AS v(pokemon_id, slot, gender);
`;

//keeping same connection string rather than making it into process.argv[2]
//since there's no production database and I'll just be using local
async function main(){
    console.log('seeding...');
    const client = new Client({
        connectionString: process.env.DATABASE_URL
    });
    await client.connect()
    await client.query(SQL);
    await client.end()
    console.log('Done setting up db and seeding');
}

main();

