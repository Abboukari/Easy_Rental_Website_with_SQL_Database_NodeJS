-- Wat komt hier in te staan?
CREATE DATABASE biker_database;GO;
USE biker_database;

IF NOT EXISTS(
        SELECT *
        FROM sys.objects
        WHERE object_id = OBJECT_ID(N'[dbo].[fiets]')
          AND type IN (N'U')
    )
    BEGIN
        CREATE TABLE fiets
        (
            id          INT          NOT NULL IDENTITY (1,1),
            type        VARCHAR(255) NOT NULL,
            nieuw_prijs FLOAT        NOT NULL,
            dag_prijs   FLOAT        NOT NULL,
            borg_prijs  FLOAT        NOT NULL,
            merk        VARCHAR(255) NOT NULL,
            PRIMARY KEY (id),
            CONSTRAINT check_nieuw_prijs_fiets CHECK (nieuw_prijs > 0.0),
            CONSTRAINT check_dag_prijs_fiets CHECK (dag_prijs > 0.0),
            CONSTRAINT check_borg_prijs_fiets CHECK (borg_prijs > 0.0),
        );
    END;
GO;

INSERT INTO fiets (type, nieuw_prijs, dag_prijs, borg_prijs, merk)
VALUES ('hop', 2300, 60, 250, 'SpeedZ');