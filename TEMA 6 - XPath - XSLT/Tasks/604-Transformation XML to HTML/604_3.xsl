<?xml version="1.0" encoding="UTF-8"?>
<xsl:stylesheet xmlns:xsl="http://www.w3.org/1999/XSL/Transform" version="1.0">
    <xsl:template match="/">
        <html>
            <body>
                <xsl:text>&#10;</xsl:text>
                <h1>
                    <xsl:value-of select="secondary-school/name"></xsl:value-of>
                </h1>
                <xsl:apply-templates />
            </body>
            <xsl:text>&#10;</xsl:text>
        </html>
    </xsl:template>

    <xsl:template match="web">
        <p>Web Page: <a>
            <xsl:attribute name="href">
                <xsl:value-of select="." />
            </xsl:attribute>
        </a></p>
        
    </xsl:template>

    <xsl:template match="cycle">
        <table>
            <tr>
                <th>Cycle name</th>
                <th>Grade</th>
                <th>Year of title</th>
            </tr>
            <tr>
                <td> <xsl:value-of select="name" /> </td>
                <td> <xsl:value-of select="grade" /> </td>
                <td> <xsl:value-of select="@year" /> </td>
            </tr>
            </table>
    </xsl:template>

</xsl:stylesheet>